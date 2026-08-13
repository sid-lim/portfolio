function screenshotSrc(url: string) {
  const params = new URLSearchParams({
    url,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    "viewport.width": "1400",
    "viewport.height": "1000",
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

export default function LiveSnapshot({ url, className = "" }: { url: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={screenshotSrc(url)}
      alt=""
      loading="lazy"
      className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
    />
  );
}
