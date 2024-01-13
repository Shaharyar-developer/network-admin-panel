import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

import { Plus, Power, RefreshCcw, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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

import type { User } from "@/lib/types";

export const DeviceAccountManagement = ({
  Users,
  setUsers,
  setLog,
}: {
  Users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  useEffect(() => {
    toast.info(
      "You are a admin, thus have full access. In a real world scenario there would be levels of access."
    );
  }, []);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<User["role"] | null>(null);
  const handleClick = () => {
    const name = nameRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    console.log(name, password, confirmPassword, role);

    if (!name || !password || !confirmPassword || !role) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    nameRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";

    setUsers((prev) => [...prev, { name, password, role }]);
    setLog((prev) => [
      ...prev,
      `Added user ${name}, with role ${role} and password ${password}`,
    ]);
  };
  return (
    <div className="flex flex-col gap-12">
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>
              <Input
                ref={nameRef}
                className="w-[180px] lg:w-[300px]"
                placeholder="Name"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Password</TableCell>
            <TableCell>
              <Input
                ref={passwordRef}
                className="w-[180px] lg:w-[300px]"
                placeholder="Password"
                type="password"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Confirm Password</TableCell>
            <TableCell>
              <Input
                ref={confirmPasswordRef}
                className="w-[180px] lg:w-[300px]"
                placeholder="Confirm Password"
                type="password"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>
              <Select onValueChange={(e: User["role"]) => setRole(e)}>
                <SelectTrigger className="w-[180px] lg:w-[300px]">
                  <SelectValue className="capitalize" placeholder={"Role"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="capitalize" value="admin">
                    admin
                  </SelectItem>
                  <SelectItem className="capitalize" value="user">
                    user
                  </SelectItem>
                </SelectContent>
              </Select>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <Button onClick={handleClick} className="w-[180px] lg:w-[300px]">
                <Plus /> Add
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table className="container mx-auto border">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Password</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Users.map((user, idx) => (
            <TableRow key={idx}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell className="capitalize">{user.role}</TableCell>
              <TableCell>
                <Button
                  variant={"destructive"}
                  onClick={() => {
                    setUsers((prev) => prev.filter((_, i) => i !== idx));
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
export const DeviceManagement = ({
  setLog,
}: {
  setLog: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [powerRange, setPowerRange] = useState<number[]>([100]);
  return (
    <Table className="container mx-auto border lg:border-t-0">
      <TableBody>
        <TableRow>
          <TableCell>Restore All Settings</TableCell>
          <TableCell>
            <Button
              onClick={() => {
                setLog((prev) => [...prev, "Restored all settings"]);
              }}
            >
              <RefreshCcw />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Reboot Device</TableCell>
          <TableCell>
            <Button
              onClick={() => {
                setLog((prev) => [...prev, "Rebooted device"]);
              }}
            >
              <Power />
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Max Power Usage</TableCell>
          <TableCell className="flex gap-2">
            {powerRange[0]}%
            <Slider
              value={powerRange}
              onValueChange={(e) => {
                setPowerRange(e);
                setLog((prev) => [...prev, `Max power usage set to ${e[0]}%`]);
              }}
              defaultValue={[100]}
              max={100}
              min={10}
              step={10}
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
export const DeviceLogs = ({ logs }: { logs: string[] }) => {
  useEffect(() => {
    logs.length === 0 &&
      toast.info("No logs to display, Try Interacting with some options");
  }, [logs]);
  return (
    <div className="">
      <Table className="container mx-auto border lg:border-t-0">
        <TableBody>
          {logs.map((log, idx) => (
            <TableRow
              onClick={() => {
                navigator.clipboard.writeText(log);
                toast.success("Copied to clipboard");
              }}
              key={idx}
            >
              <TableCell>{idx + 1}.</TableCell>
              <TableCell>
                <span>{log}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};