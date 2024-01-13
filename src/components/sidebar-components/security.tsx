"use client";

import { Button } from "../ui/button";
import { useQueryState } from "nuqs";

export default function Security() {
  const [mode, setMode] = useQueryState("mode");
  return (
    <div className="flex flex-col gap-2">
      <Button
        onClick={() => setMode("security-firewall-control")}
        disabled={mode === "security-firewall-control"}
        variant={"link"}
        className="justify-start rounded-none"
      >
        Firewall
      </Button>

      <Button
        variant={"link"}
        className="justify-start rounded-none"
        onClick={() => setMode("security-ddos")}
        disabled={mode === "security-ddos"}
      >
        DDOS
      </Button>

      <Button
        variant={"link"}
        className="justify-start rounded-none"
        onClick={() => setMode("security-https")}
        disabled={mode === "security-https"}
      >
        HTTPS
      </Button>
    </div>
  );
}
