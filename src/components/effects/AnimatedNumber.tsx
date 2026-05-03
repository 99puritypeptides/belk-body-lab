'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ 
  start = 0, 
  end = 100, 
  decimals = 0, 
  color = "currentColor",
  className = ""
}: {
  start?: number;
  end?: number;
  decimals?: number;
  color?: string;
  className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const value = useMotionValue(start);
    const spring = useSpring(value, { damping: 30, stiffness: 100 });
    
    const [isMounted, setIsMounted] = useState(false);

    const display = useTransform(spring, num => {
        const n = Number(num);
        const fixed = n.toFixed(decimals);
        // Use a stable locale for hydration consistency
        if (decimals === 0 && n >= 1000) {
            return Number(fixed).toLocaleString('en-US');
        }
        return fixed;
    });

    useEffect(() => {
        setIsMounted(true);
        if (isInView) {
            value.set(end);
        } else {
            value.set(start);
        }
    }, [start, end, isInView, value]);

    return (
        <motion.span ref={ref} className={className} style={{ color, display: "inline-block" }}>
            {isMounted ? display : start}
        </motion.span>
    );
}
