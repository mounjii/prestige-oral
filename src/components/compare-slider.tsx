"use client";

import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

type CompareSliderProps = {
  src: string;
  alt: string;
  before: string;
  after: string;
  label: string;
};

export function CompareSlider({ src, alt, before, after, label }: CompareSliderProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLButtonElement>(null);
  const position = useMotionValue(52);
  const clip = useTransform(position, (value) => `${value}%`);
  const handleStart = useTransform(position, (value) => `calc(${value}% - 22px)`);

  const apply = useCallback(
    (next: number) => {
      const value = Math.min(88, Math.max(12, next));
      position.set(value);
      handleRef.current?.setAttribute("aria-valuenow", String(Math.round(value)));
    },
    [position],
  );

  const setFromClientX = useCallback(
    (clientX: number) => {
      const rect = frameRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0) return;
      const rtl = document.documentElement.dir === "rtl";
      const fromStart = rtl ? rect.right - clientX : clientX - rect.left;
      apply((fromStart / rect.width) * 100);
    },
    [apply],
  );

  return (
    <div
      ref={frameRef}
      className="@container relative aspect-[16/9] cursor-ew-resize touch-none overflow-hidden rounded-[1.6rem] bg-cream select-none"
      onPointerDown={(event) => {
        if (event.button !== 0) return;
        event.currentTarget.setPointerCapture(event.pointerId);
        setFromClientX(event.clientX);
      }}
      onPointerMove={(event) => {
        if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
        setFromClientX(event.clientX);
      }}
    >
      <Image src={src} alt={alt} fill draggable={false} sizes="(max-width: 920px) 100vw, 920px" className="object-cover" />
      <motion.div className="absolute inset-y-0 start-0 overflow-hidden" style={{ width: clip }}>
        <div className="absolute inset-y-0 start-0 w-[100cqi]">
          <Image
            src={src}
            alt=""
            fill
            draggable={false}
            sizes="(max-width: 920px) 100vw, 920px"
            className="object-cover sepia-[0.55] saturate-[0.55]"
          />
        </div>
      </motion.div>
      <span className="pointer-events-none absolute bottom-3 start-3 rounded-full bg-paper/95 px-3 py-1 text-xs font-medium text-ink shadow-sm sm:bottom-4 sm:start-4 sm:px-4 sm:text-sm">
        {before}
      </span>
      <span className="pointer-events-none absolute bottom-3 end-3 rounded-full bg-paper/95 px-3 py-1 text-xs font-medium text-ink shadow-sm sm:bottom-4 sm:end-4 sm:px-4 sm:text-sm">
        {after}
      </span>
      <motion.button
        ref={handleRef}
        type="button"
        role="slider"
        aria-label={label}
        aria-valuemin={12}
        aria-valuemax={88}
        aria-valuenow={52}
        aria-orientation="horizontal"
        className="absolute top-0 bottom-0 z-10 w-11 cursor-ew-resize"
        style={{ insetInlineStart: handleStart }}
        onKeyDown={(event) => {
          const current = position.get();
          const rtl = document.documentElement.dir === "rtl";
          const forward = rtl ? event.key === "ArrowLeft" : event.key === "ArrowRight";
          const back = rtl ? event.key === "ArrowRight" : event.key === "ArrowLeft";
          if (forward || event.key === "ArrowUp") {
            event.preventDefault();
            apply(current + 4);
          }
          if (back || event.key === "ArrowDown") {
            event.preventDefault();
            apply(current - 4);
          }
        }}
      >
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-paper" />
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_8px_20px_-12px_rgba(56,39,25,0.8)]">
          <MoveHorizontal className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </span>
      </motion.button>
    </div>
  );
}
