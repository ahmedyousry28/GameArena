"use client";
import { motion, AnimatePresence } from "framer-motion";
export const MotionDiv = motion.div;
export const MotionNav = motion.nav;
export const MotionAside = motion.aside;
export const MotionAnimatePresence = AnimatePresence;

export const ContainerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
  },
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
