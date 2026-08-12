"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const PAGE_ORDER = ["/", "/about", "/resume", "/contact"];

// Total scroll distance that must accumulate at a page edge before a
// page change fires — gives the scroll some "resistance" so a small
// flick doesn't instantly flip pages.
const RESISTANCE_THRESHOLD = 220;
const NAV_LOCK_MS = 1000;

export default function ScrollPageNav({ enabled = true }: { enabled?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const lockedRef = useRef(false);

  useEffect(() => {
    lockedRef.current = false;
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const currentIndex = PAGE_ORDER.indexOf(normalizedPath);
    if (currentIndex === -1) return;

    let accumulated = 0;
    let lastDirection = 0;
    let touchStartY = 0;

    const atTop = () => window.scrollY <= 2;
    const atBottom = () =>
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

    const resetAccumulator = () => {
      accumulated = 0;
      lastDirection = 0;
    };

    const navigate = (direction: 1 | -1) => {
      if (lockedRef.current) return;
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;
      lockedRef.current = true;
      resetAccumulator();
      router.push(PAGE_ORDER[nextIndex]);
      window.setTimeout(() => {
        lockedRef.current = false;
      }, NAV_LOCK_MS);
    };

    const accumulate = (direction: 1 | -1, magnitude: number, edgeOk: boolean) => {
      if (!edgeOk) {
        resetAccumulator();
        return;
      }
      if (direction !== lastDirection) {
        accumulated = 0;
        lastDirection = direction;
      }
      accumulated += magnitude;
      if (accumulated >= RESISTANCE_THRESHOLD) {
        navigate(direction);
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (lockedRef.current) return;
      if (Math.abs(e.deltaY) < 2) return;
      const direction: 1 | -1 = e.deltaY > 0 ? 1 : -1;
      const edgeOk = direction === 1 ? atBottom() : atTop();
      accumulate(direction, Math.abs(e.deltaY), edgeOk);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (lockedRef.current) return;
      const currentY = e.touches[0].clientY;
      const rawDelta = touchStartY - currentY;
      touchStartY = currentY;
      if (Math.abs(rawDelta) < 2) return;
      const direction: 1 | -1 = rawDelta > 0 ? 1 : -1;
      const edgeOk = direction === 1 ? atBottom() : atTop();
      accumulate(direction, Math.abs(rawDelta), edgeOk);
    };

    const onTouchEnd = () => resetAccumulator();

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [pathname, router, enabled]);

  return null;
}
