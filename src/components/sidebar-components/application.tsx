"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Application() {
  const [mode, setMode] = useQueryState("mode");

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("application-port-forwarding")}
        disabled={mode === "application-port-forwarding"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        Port Forwarding
      </Button>

      <Button
        onClick={() => setMode("application-upnp")}
        disabled={mode === "application-upnp"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        UPNP
      </Button>
    </div>
  );
}
