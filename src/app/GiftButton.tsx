'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Confetti from 'react-confetti';

export default function GiftButton() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      {!showGift ? (
        <Button
          className="text-lg px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500"
          onClick={() => setShowGift(true)}
        >
          Show me my present!
        </Button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Card className="p-6 bg-white text-black text-center rounded-lg shadow-xl">
            <CardContent>
              <h1 className="text-2xl font-bold">No gift here, except...</h1>
              <p className="mt-4 text-lg font-semibold">A virtual voucher for a...</p>
              <p className="mt-2 text-3xl font-extrabold text-red-500">PAID TICKET TO SCOTLAND WITH VIC! YAYAYAYYAYAYA 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉</p>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
