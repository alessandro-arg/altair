"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DemoPage() {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleBlocking = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", { method: "POST" });
    setLoading(false);
  };

  const handleBackground = async () => {
    setLoading2(true);
    await fetch("/api/demo/background", { method: "POST" });
    setLoading2(false);
  };

  const handleClientError = () => {
    throw new Error("Client error: Something went wrong in the browser!");
  };

  const handleApiError = async () => {
    await fetch("/api/demo/error", { method: "POST" });
  };

  const handleInngestError = async () => {
    await fetch("/api/demo/inngest-error", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-4">
      <Button disabled={loading} onClick={handleBlocking}>
        {loading ? "Loading..." : "Blocking"}
      </Button>
      <Button disabled={loading2} onClick={handleBackground}>
        {loading2 ? "Loading..." : "Background"}
      </Button>
      <Button onClick={handleClientError} variant="destructive">
        Client Error
      </Button>
      <Button onClick={handleApiError} variant="destructive">
        API Error
      </Button>
      <Button onClick={handleInngestError} variant="destructive">
        Inngest Error
      </Button>
    </div>
  );
}
