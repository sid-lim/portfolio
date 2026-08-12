"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const PAGE_ORDER = ["/", "/about", "/resume", "/contact"];

export default function ScrollPageNav({ enabled = true }: { enabled?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const lockedRef = useRef(false);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    lockedRef.current = false;
  }, [pathname]);

  useEffect(() => {
    if (!enabled) return;

    const normalizedPath = pathname.replace(/\/+$/, "") || "/";
    const currentIndex = PAGE_ORDER.indexOf(normalizedPath);
    if (currentIndex === -1) return;

    const atTop = () => window.scrollY <= 2;
    const atBottom = () =>
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

    const navigate = (direction: 1 | -1) => {
      if (lockedRef.current) return;
      const nextIndex = currentIndex + direction;
      if (nextIndex < 0 || nextIndex >= PAGE_ORDER.length) return;
      lockedRef.current = true;
      router.push(PAGE_ORDER[nextIndex]);
      window.setTimeout(() => {
        lockedRef.current = false;
      }, 1000);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 20) return;
      if (e.deltaY > 0 && atBottom()) navigate(1);
      else if (e.deltaY < 0 && atTop()) navigate(-1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaY = touchStartYRef.current - e.touches[0].clientY;
      if (Math.abs(deltaY) < 60) return;
      if (deltaY > 0 && atBottom()) navigate(1);
      else if (deltaY < 0 && atTop()) navigate(-1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [pathname, router, enabled]);

  return null;
}
