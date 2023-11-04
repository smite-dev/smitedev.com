import React from 'react';
import { motion } from 'framer-motion';
import CheemsText from './CheemsText';

const CheemsOverlay = () => {
  return (
    <div className="bg-transparent">
      <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <CheemsText/>
        </motion.h1>
      </div>
    </div>
  );
};

export default CheemsOverlay;
