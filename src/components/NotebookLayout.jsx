"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './NotebookLayout.module.css';

export default function NotebookLayout({ children, currentPageIndex, pages }) {
  // This layout creates the 3D perspective and the spiral binding.
  // The pages array contains the components for each route/section.
  
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.notebookWrapper}>
        
        {/* Back Cover / Stack thickness */}
        <div className={styles.backCover}></div>
        
        {/* The Spiral Binding Illustration */}
        <div className={styles.spiralBinding}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.ring}></div>
          ))}
        </div>

        {/* The Pages Container */}
        <div className={styles.pagesContainer}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentPageIndex}
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.645, 0.045, 0.355, 1.0], // Custom GSAP-like easing
              }}
              className={styles.pageSurface}
              style={{ originX: 0 }} // Rotate around the left edge (the binding)
            >
              <div className={styles.pageContent}>
                {children}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
