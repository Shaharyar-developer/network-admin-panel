"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Network() {
  const [mode, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant={"link"}
        className="justify-start rounded-none max-w-max"
        onClick={() => setMode("network-wlan-settings")}
        disabled={mode === "network-wlan-settings"}
      >
        WLAN Settings
      </Button>

      <Button
        variant={"link"}
        className="justify-start rounded-none max-w-max"
        onClick={() => setMode("network-lan-settings")}
        disabled={mode === "network-lan-settings"}
      >
        LAN Settings
      </Button>

      <Button
        onClick={() => setMode("network-broadband-settings")}
        disabled={mode === "network-broadband-settings"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        Broadband Settings
      </Button>

      <Button
        onClick={() => setMode("network-remote-management")}
        disabled={mode === "network-remote-management"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        Remote Management
      </Button>

      <Button
        onClick={() => setMode("network-voip-settings")}
        disabled={mode === "network-voip-settings"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        VoIP Settings
      </Button>
    </div>
  );
}
