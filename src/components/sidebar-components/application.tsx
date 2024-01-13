"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Application() {
  const [mode, setMode] = useQueryState("mode");

  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("application-ddns")}
        disabled={mode === "application-ddns"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        DDNS
      </Button>

      <Button
        onClick={() => setMode("application-port-forwarding")}
        disabled={mode === "application-port-forwarding"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Port Forwarding
      </Button>

      <Button
        onClick={() => setMode("application-nat")}
        disabled={mode === "application-nat"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        NAT
      </Button>

      <Button
        onClick={() => setMode("application-upnp")}
        disabled={mode === "application-upnp"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        UPNP
      </Button>

      <Button
        onClick={() => setMode("application-dmz")}
        disabled={mode === "application-dmz"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        DMZ
      </Button>
      <Button
        onClick={() => setMode("application-voip")}
        disabled={mode === "application-voip"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Diagnosis
      </Button>
    </div>
  );
}
