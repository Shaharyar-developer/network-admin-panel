"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "../ui/button";

export default function Security() {
  return (
    <div className="flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="justify-start rounded-none">
            Firewall
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Firewall Control</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>IPv4 Filtering</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>IPv6 Filtering</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>URL Filtering</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Anti Port Scan</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>MAC Filtering</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>IPv6 MAC Filtering</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant={"ghost"} className="justify-start rounded-none">
        DDOS
      </Button>

      <Button variant={"ghost"} className="justify-start rounded-none">
        HTTPS
      </Button>
    </div>
  );
}
