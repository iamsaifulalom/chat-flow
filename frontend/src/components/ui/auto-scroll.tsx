import { useEffect, useRef } from "react";

interface AutoScrollProps {
  deps?: any[]; // dependencies to trigger scroll
}

export default function AutoScroll({ deps = [] }: AutoScrollProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = elRef.current?.parentElement;
    if (!parent) return;

    parent.scrollTop = parent.scrollHeight;
  }, deps);

  return <div ref={elRef} />; // empty div acts as anchor
}
