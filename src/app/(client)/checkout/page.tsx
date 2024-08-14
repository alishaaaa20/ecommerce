"use client";
import BillingDetails from "@/components/Checkout/BillingDetails";
import Payment from "@/components/Checkout/Payment";
import PersonalDetailsForm from "@/components/Checkout/PersonalDetailsForm";
import React from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const STEP_BILLING_DETAILS = "billingDetails";
const STEP_PAYMENT = "payment";

export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const isBillingDetailsStep = step === STEP_BILLING_DETAILS;
  const isPaymentStep = step === STEP_PAYMENT;

  const billingDetailsVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const paymentVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="container py-10">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      <div className="w-full flex lg:flex-row flex-col">
        <div className="lg:w-1/2 border-r-2">
          <PersonalDetailsForm />
        </div>
        <div className="lg:w-1/2  ">
          <AnimatePresence>
            {isBillingDetailsStep && (
              <motion.div
                key="billingDetails"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={billingDetailsVariants}
                transition={{ duration: 0.5 }}
              >
                <BillingDetails />
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isPaymentStep && (
              <motion.div
                key="payment"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={paymentVariants}
                transition={{ duration: 0.5 }}
              >
                <BillingDetails />
                <Payment />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
