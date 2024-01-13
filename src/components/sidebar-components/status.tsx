"use client";

import { useQueryState } from "nuqs";

import { Button } from "../ui/button";

export default function Status() {
  const [mode, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <Button
        disabled={mode === "status-device-info"}
        onClick={() => setMode("status-device-info")}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Device Information
      </Button>

      <Button
        disabled={mode === "status-wireless-status"}
        onClick={() => setMode("status-wireless-status")}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Wireless Status
      </Button>

      <Button
        disabled={mode === "status-wan-status"}
        onClick={() => setMode("status-wan-status")}
        variant={"link"}
        className="justify-start rounded-none"
      >
        WAN Status
      </Button>

      <Button
        variant={"link"}
        onClick={() => setMode("status-lan-status")}
        disabled={mode === "status-lan-status"}
        className="justify-start rounded-none"
      >
        LAN Status
      </Button>
    </div>
  );
}
