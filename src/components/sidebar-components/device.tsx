"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";
import React from "react";

export default function Device(): React.JSX.Element {
  const [mode, setMode] = useQueryState("mode");

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("device-account-management")}
        disabled={mode === "device-account-management"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Account Management
      </Button>

      <Button
        onClick={() => setMode("device-management")}
        disabled={mode === "device-management"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Device Management
      </Button>

      <Button
        onClick={() => setMode("device-log")}
        disabled={mode === "device-log"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Log
      </Button>
    </div>
  );
}
