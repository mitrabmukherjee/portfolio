"use client";

import { motion } from "framer-motion";

const BLOB_PATH =
  "M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.1C26.4,83.2,10,84.8,-4.4,83.4C-18.8,82,-31.2,77.6,-43.2,70.8C-55.2,64,-66.8,54.8,-74.4,43.1C-82,31.4,-85.6,17.2,-84.5,3.4C-83.4,-10.4,-77.6,-20.8,-69.8,-29.1C-62,-37.4,-52.2,-43.6,-41.1,-51.2C-30,-58.8,-17.6,-67.8,-4.2,-70.8C9.2,-73.8,30.6,-70.8,44.7,-76.4Z";

interface MorphBlobProps {
  className?: string;
  fill?: string;
  width?: number;
  height?: number;
  duration?: number;
}

export default function MorphBlob({
  className = "",
  fill = "currentColor",
  width = 180,
  height = 180,
  duration = 5,
}: MorphBlobProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 180"
      className={className}
      aria-hidden
    >
      <motion.g
        transform="translate(90 90)"
        animate={{
          scale: [1, 1.15, 1.08, 1],
          rotate: [0, 5, -3, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <path fill={fill} d={BLOB_PATH} />
      </motion.g>
    </svg>
  );
}
