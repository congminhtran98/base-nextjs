"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const withInViewAnimation = (Component: React.FC) => {
  return function AnimatedComponent(props: any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.2, once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};

export default withInViewAnimation;



