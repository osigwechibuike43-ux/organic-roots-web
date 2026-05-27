import { Leaf } from "lucide-react";

export function FloatingLeaves() {
  const leaves = [
    { top: "8%", left: "6%", size: 24, delay: "0s", opacity: 0.35 },
    { top: "22%", left: "88%", size: 18, delay: "1.4s", opacity: 0.25 },
    { top: "60%", left: "12%", size: 30, delay: "2.6s", opacity: 0.3 },
    { top: "78%", left: "78%", size: 22, delay: "0.8s", opacity: 0.28 },
    { top: "40%", left: "50%", size: 16, delay: "3.2s", opacity: 0.2 },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {leaves.map((l, i) => (
        <Leaf
          key={i}
          className="absolute text-leaf animate-float-leaf"
          style={{
            top: l.top,
            left: l.left,
            width: l.size,
            height: l.size,
            opacity: l.opacity,
            animationDelay: l.delay,
          }}
        />
      ))}
    </div>
  );
}
