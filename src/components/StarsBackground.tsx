import { useEffect, useRef } from "react";

type Props = {
  count?: number;
  className?: string;
};

export default function StarsBackground({ count = 300, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Inject CSS once (avoid duplicating)
    const STYLE_ID = "stars-bg-style";
    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.innerHTML = `
        .star {
          position: absolute;
          background: pink;
          border-radius: 50%;
          pointer-events: none;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes drift {
          0% { transform: translate(0, 0); }
          50% { transform: translate(var(--drift-x), var(--drift-y)); }
          100% { transform: translate(0, 0); }
        }
      `;
      document.head.appendChild(style);
    }

    const getDocSize = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      const width = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        window.innerWidth
      );
      return { width, height };
    };

    const createStars = () => {
      const { width, height } = getDocSize();

      // Make container cover the whole scrollable area
      container.style.height = `${height}px`;
      container.style.width = `${width}px`;

      container.innerHTML = "";

      for (let i = 0; i < count; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const x = Math.random() * width;
        const y = Math.random() * height;

        const size = Math.random() * 2 + 0.5;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        const twinkleDuration = Math.random() * 2 + 1;
        const driftDuration = Math.random() * 5 + 3;

        star.style.animation = `twinkle ${twinkleDuration}s infinite, drift ${driftDuration}s linear infinite`;
        star.style.setProperty("--drift-x", `${Math.random() * 50 - 25}px`);
        star.style.setProperty("--drift-y", `${Math.random() * 50 - 25}px`);

        container.appendChild(star);
      }
    };

    // Initial
    createStars();

    // Resize listener
    const onResize = () => createStars();
    window.addEventListener("resize", onResize);

    // Optional: if page height changes a lot (content loads), re-generate
    // This is better than listening to scroll all the time.
    const ro = new ResizeObserver(() => createStars());
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      // (We keep the style tag, since it's shared + harmless)
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    />
  );
}
