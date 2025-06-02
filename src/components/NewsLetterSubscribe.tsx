"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulate API request (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setTimeout(() => {
        setEmail(""); // Clear input after success
      }, 3000)
    } catch (error) {
      setStatus("error");
    }
  };

  // Automatically hide message after 3 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => { setStatus("idle") }, 3000);
      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [status]);

  return (
    <div className="w-full max-w-lg mx-auto rounded">
      <h3 className="text-xl font-semibold mb-1">Subscribe to Our Newsletter</h3>
      <p className="text-sm mb-4">Sign up for our newsletter and receive handpicked updates, inspiration, and special offers — delivered straight to your inbox!</p>

      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required
          className="flex-1 h-10 px-3 pt-2 pb-2.5 rounded focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-blue-500" />
        <Button type="submit" disabled={status === "loading"}
          className="h-10 px-5 pt-2 pb-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-50">
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      {/* Status Messages (Disappear After 3 Seconds) */}
      {status === "success" && <p className="text-green-600 mt-1 text-xs">Successfully subscribed!</p>}
      {status === "error" && <p className="text-red-600 mt-1 text-xs">Something went wrong. Try again!</p>}
    </div>
  );
}
