"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Security() {
  const [mode, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("security-firewall")}
        disabled={mode === "security-firewall"}
        variant={"link"}
        className="justify-start rounded-none max-w-max"
      >
        Firewall
      </Button>

      <Button
        variant={"link"}
        className="justify-start rounded-none max-w-max"
        onClick={() => setMode("security-ddos")}
        disabled={mode === "security-ddos"}
      >
        DDOS
      </Button>

      <Button
        variant={"link"}
        className="justify-start rounded-none max-w-max"
        onClick={() => setMode("security-https")}
        disabled={mode === "security-https"}
      >
        HTTPS
      </Button>
    </div>
  );
}
