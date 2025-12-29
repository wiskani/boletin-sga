"use client";

import React, { useEffect, useRef, useState } from "react";

const FaucetDrip: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const rootRef = useRef<HTMLDivElement | null>(null);
  const tapRef = useRef<HTMLImageElement | null>(null);
  const dropRef = useRef<HTMLImageElement | null>(null);
  const splashRef = useRef<HTMLImageElement | null>(null);

  const intervalRef = useRef<number | null>(null);

  // estado igual a tu JS
  const segRef = useRef(0);
  const posRef = useRef(0);
  const t0Ref = useRef(Date.now());

  // geometría (en px) calculada desde el tap real
  const startTopRef = useRef(0);
  const baseTopRef = useRef(0);
  const dropLeftRef = useRef(0);
  const splashLeftRef = useRef(0);

  const stop = () => {
    if (intervalRef.current != null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const splash = () => {
    const splashEl = splashRef.current;
    if (!splashEl) return;
    splashEl.style.opacity = "1";
    window.setTimeout(() => {
      splashEl.style.opacity = "0";
    }, 400); // tu original
  };

  const measure = () => {
    const root = rootRef.current;
    const tap = tapRef.current;
    const drop = dropRef.current;
    if (!root || !tap || !drop) return;

    const r = root.getBoundingClientRect();
    const t = tap.getBoundingClientRect();
    const d = drop.getBoundingClientRect();

    // “boquilla” aproximada dentro del tap (ajustable con 1 número)
    const spoutX = t.right - t.width * 0.14;

    // Y: un poco debajo de la boquilla (y base del grifo)
    const startTop = t.top - r.top + t.height * 0.25;
    const baseTop = t.top - r.top + t.height * 0.79;

    startTopRef.current = startTop;
    baseTopRef.current = baseTop;

    dropLeftRef.current = spoutX - r.left - d.width / 3;
    splashLeftRef.current = dropLeftRef.current - d.width * 0.95;
  };

  const resetPhysics = () => {
    segRef.current = 0;
    t0Ref.current = Date.now();
    posRef.current = startTopRef.current;
  };

  const paint = () => {
    const dropEl = dropRef.current;
    const splashEl = splashRef.current;
    if (!dropEl || !splashEl) return;

    dropEl.style.top = `${posRef.current}px`;
    dropEl.style.left = `${dropLeftRef.current}px`;

    splashEl.style.top = `${baseTopRef.current}px`;
    splashEl.style.left = `${splashLeftRef.current}px`;
  };

  const move = () => {
    if (!isOpen) return;

    const base = baseTopRef.current;

    if (posRef.current >= base) {
      // tu efecto: reinicio arriba + splash (sin “rebote”)
      posRef.current = startTopRef.current;
      resetPhysics();
      splash();
      paint();
      return;
    }

    // tu fórmula (en tu archivo está escrito con coma, pero la intención es decimal)
    const seg = (Date.now() - t0Ref.current) / 1000;
    segRef.current = seg;

    const sinredon = 0.9 * ((seg * seg) / 2);
    posRef.current = posRef.current + Math.round(sinredon);

    paint();
  };

  useEffect(() => {
    // medir una vez al montar y en resize
    measure();
    resetPhysics();
    paint();

    const onResize = () => {
      measure();
      resetPhysics();
      paint();
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    stop();

    const dropEl = dropRef.current;
    const splashEl = splashRef.current;

    if (!dropEl || !splashEl) return;

    if (!isOpen) {
      // cerrar: ocultar gota y splash y detener loop
      dropEl.style.opacity = "0";
      splashEl.style.opacity = "0";
      return;
    }

    // abrir: mostrar gota, reiniciar física y arrancar loop
    dropEl.style.opacity = "1";
    resetPhysics();
    paint();

    intervalRef.current = window.setInterval(move, 8); // tu original
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div
      ref={rootRef}
      className="relative w-full h-full overflow-hidden select-none"
    >
      <img
        ref={tapRef}
        src="/icons/tap.svg"
        alt="Grifo"
        draggable={false}
        className="absolute pointer-events-none"
        style={{
          left: "8%",
          top: "6%",
          width: "62%",
          height: "auto",
          zIndex: 5,
        }}
        onLoad={() => {
          measure();
          resetPhysics();
          paint();
        }}
      />

      {/* Palanca simple: sin motion, sin variants */}
      <button
        type="button"
        className="absolute z-10 cursor-pointer"
        style={{ left: "25%", top: "88%", width: "24%" }}
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Cerrar grifo" : "Abrir grifo"}
      >
        <img
          src="/icons/valve.svg"
          alt=""
          draggable={false}
          className="block w-full h-auto"
          style={{
            transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 250ms ease-out",
            transformOrigin: "00% 50%",
          }}
        />
      </button>

      <img
        ref={dropRef}
        src="/icons/drop.svg"
        alt="Gota"
        draggable={false}
        className="absolute pointer-events-none"
        style={{
          width: "6%",
          height: "auto",
          opacity: 1,
          top: 0,
          left: 0,
          zIndex: 2,
        }}
        onLoad={() => {
          measure();
          resetPhysics();
          paint();
        }}
      />

      <img
        ref={splashRef}
        src="/icons/splash.svg"
        alt=""
        draggable={false}
        className="absolute pointer-events-none"
        style={{ width: "18%", height: "auto", opacity: 0, top: 0, left: 0 }}
      />
    </div>
  );
};

export default FaucetDrip;
