"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Confetti from "react-confetti";

export default function GiftButton() {
  const [step, setStep] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
      {step === 0 && (
        <Button
          className="text-lg px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-500"
          onClick={() => setStep(1)}
        >
          Show me my present!
        </Button>
      )}
      {step > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Confetti width={window.innerWidth} height={window.innerHeight} />
          <Card className="p-6 bg-white text-black text-center rounded-lg shadow-xl">
            <CardContent>
              {step >= 1 && (
                <>
                  <h1 className="text-2xl font-bold">No gift here...</h1>
                  {step === 1 && (
                    <Button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => setStep(2)}
                    >
                      ...Wtf?
                    </Button>
                  )}
                </>
              )}
              {step >= 2 && (
                <>
                  <p className="mt-4 text-lg font-semibold">
                    except a virtual voucher for a...
                  </p>
                  {step === 2 && (
                    <Button
                      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                      onClick={() => setStep(3)}
                    >
                      Okay... WHAT IS IT????
                    </Button>
                  )}
                </>
              )}
              {step >= 3 && (
                <>
                  <p className="mt-2 text-3xl font-extrabold text-red-500">
                    PAID TICKET TO SCOTLAND WITH VIC! YAYAYAYYAYAYA 🎉 🎉 🎉 🎉
                    🎉 🎉 🎉 🎉
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}
