import React, { useState } from "react";
import axios from "axios";

export default function DonationPage() {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  // Load Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    const res = await loadRazorpayScript();

    if (!res) {
      alert("Failed to load Razorpay SDK. Are you online?");
      return;
    }

    setLoading(true);
    try {
      // Create order on backend
      const orderRes = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: Number(amount) }
      );

      const { id: order_id, amount: orderAmount, currency } = orderRes.data;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay Key ID
        amount: orderAmount.toString(),
        currency: currency,
        name: "Sahyog Donation",
        description: "Donation towards disaster relief",
        order_id: order_id,
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
          setAmount("");
          // Here you can call your backend to verify payment or save donation details
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        theme: {
          color: "#4F46E5", // Indigo-600
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error(error);
      alert("Error creating order. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
        Donate to Sahyog
      </h2>

      <label
        htmlFor="amount"
        className="block mb-2 text-gray-700 dark:text-gray-300"
      >
        Donation Amount (INR)
      </label>
      <input
        id="amount"
        type="number"
        min="1"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
        placeholder="Enter amount in INR"
      />

      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full mt-6 py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
}
