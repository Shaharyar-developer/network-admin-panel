import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Check, Plus, Shield, ShieldBan, Trash, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { toast } from "sonner";

import type { PortForwardingRule } from "@/lib/types";

type protocol = "UDP" | "TCP";

export const ApplicationPortForwarding = ({
  portForwardingRules,
  setPortForwardingRules,
  setLog,
}: {
  portForwardingRules: PortForwardingRule[];
  setPortForwardingRules: React.Dispatch<
    React.SetStateAction<PortForwardingRule[]>
  >;
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [portForwading, setPortForwarding] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const ipRef = useRef<HTMLInputElement>(null);
  const publicPortRef = useRef<HTMLInputElement>(null);
  const privatePortRef = useRef<HTMLInputElement>(null);
  const [protocol, setProtocol] = useState<protocol>("TCP");

  const handleClick = () => {
    if (
      nameRef.current?.value &&
      ipRef.current?.value &&
      publicPortRef.current?.value &&
      privatePortRef.current?.value
    ) {
      setPortForwardingRules([
        ...portForwardingRules,
        {
          name: nameRef.current.value,
          IP: ipRef.current.value,
          PublicPort: publicPortRef.current.value,
          PrivatePort: privatePortRef.current.value,
          Protocol: protocol,
        },
      ]);
      toast.success("Port Forwarding Rule Added");
      setOpen(false);
    } else {
      toast.error("Please fill out all fields");
    }
    setLog((prev) => [
      ...prev,
      `Port Forwarding Rule has been added with name ${nameRef.current?.value}, IP ${ipRef.current?.value}, Public Port ${publicPortRef.current?.value}, Private Port ${privatePortRef.current?.value}, Protocol ${protocol}`,
    ]);
  };

  return (
    <div className="flex flex-col gap-12">
      <Table className="container mx-auto  border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>Port Forwarding Rules</TableCell>
            <TableCell className="flex gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldBan />
                <Switch
                  checked={portForwading}
                  onCheckedChange={(e) => {
                    setPortForwarding(e);
                    setLog((prev) => [
                      ...prev,
                      `Port Forwarding has been ${e ? "enabled" : "disabled"}`,
                    ]);
                  }}
                />
                <Shield />
              </div>
              <Button onClick={() => setOpen(true)}>
                <Plus /> Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will add a new Port Forwarding Rule.
            </AlertDialogDescription>
            <Input ref={nameRef} placeholder="Name" />
            <Input ref={ipRef} placeholder="IP" />
            <Input ref={publicPortRef} placeholder="Public Port" />
            <Input ref={privatePortRef} placeholder="Private Port" />
            <Select
              onValueChange={(e) => {
                setProtocol(e as protocol);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder={"Protocol"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UDP">UDP</SelectItem>
                <SelectItem value="TCP">TCP</SelectItem>
              </SelectContent>
            </Select>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleClick}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Table className="container mx-auto border ">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>IP</TableHead>
            <TableHead>Public Port</TableHead>
            <TableHead>Private Port</TableHead>
            <TableHead>Protocol</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {portForwardingRules.map((rule, i) => (
            <TableRow key={i}>
              <TableCell>{rule.name}</TableCell>
              <TableCell>{rule.IP}</TableCell>
              <TableCell>{rule.PrivatePort}</TableCell>
              <TableCell>{rule.PublicPort}</TableCell>
              <TableCell>{rule.Protocol}</TableCell>
              <TableCell className="flex gap-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <X />
                  <Switch defaultChecked />
                  <Check />
                </div>
                <Button
                  variant={"destructive"}
                  onClick={() => {
                    setPortForwardingRules(
                      portForwardingRules.filter((_, index) => index !== i)
                    );
                    toast.success("Port Forwarding Rule Deleted");
                  }}
                >
                  <Trash /> &nbsp; Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export const ApplicationUPNP = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  return (
    <Table className="container mx-auto border lg:border-t-0">
      <TableBody>
        <TableRow>
          <TableCell>UPNP</TableCell>
          <TableCell>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldBan />
              <Switch
                onCheckedChange={(e) => {
                  setLog((prev) => [
                    ...prev,
                    `UPNP has been ${e ? "enabled" : "disabled"}`,
                  ]);
                }}
                defaultChecked
              />
              <Shield />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
