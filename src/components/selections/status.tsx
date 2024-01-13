"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableHeader,
} from "../ui/table";
export const StatusDeviceInfo = () => {
  const [memoryUsage, setMemoryUsage] = useState<number>();

  useEffect(() => {
    setMemoryUsage(Math.random() * 100);
  }, []);
  return (
    <>
      <div className="">
        <Table className="container mx-auto border border-t-0">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="">
            <TableRow>
              <TableCell>Software Version</TableCell>
              <TableCell>RP2834</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hardware Version</TableCell>
              <TableCell>WKE2.094.365A01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Device Model</TableCell>
              <TableCell>HG6544C</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Device Description</TableCell>
              <TableCell>GPON</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Serial Number</TableCell>
              <TableCell>FHTT9C1FC998</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>ONU Regist State</TableCell>
              <TableCell>OK</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>CPU Usage</TableCell>
              <TableCell>
                {memoryUsage
                  ? `${(memoryUsage / 2.754125).toFixed(2)}%`
                  : "Loading..."}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Memory Usage</TableCell>
              <TableCell>
                {memoryUsage ? `${memoryUsage.toFixed(2)}%` : "Loading..."}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Web Server Port</TableCell>
              <TableCell>80</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CATV State</TableCell>
              <TableCell>Disabled</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CATV Received Power</TableCell>
              <TableCell>-5.91 dBm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CATV RF Power</TableCell>
              <TableCell>0.00 dBmV</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export const StatusNetworkInfo = () => {
  return (
    <div>
      <Table className="container mx-auto border border-t-0">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Radio On/Off</TableCell>
            <TableCell>On</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Network Mode</TableCell>
            <TableCell>802.11 b/g/n</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Frequency (Channel) </TableCell>
            <TableCell>channel 11</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>SSID Name</TableCell>
            <TableCell>fh_1fc998</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Received Packets Count</TableCell>
            <TableCell>3504083</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Received Bytes Count</TableCell>
            <TableCell>816898343</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Error Received Packets Count</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Loss Received Packets Count</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sent Packets Count</TableCell>
            <TableCell>12836406</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Sent Bytes Count</TableCell>
            <TableCell>4294967295</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Error Sent Packets Count</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Loss Sent Packets Count</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export const StatusWANInfo = () => {
  return (
    <div>
      <Table className="container mx-auto border border-t-0">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>WAN IPv6 State</TableCell>
            <TableCell>Down</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IPv6 Address</TableCell>
            <TableCell>69420:adc5:0:6d92:b549:c044:6cb7:m94c</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Prefix</TableCell>
            <TableCell>69420:adc5:16d:6300::/56</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Primary DNS Server</TableCell>
            <TableCell>8.8.8.8</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Secondary DNS Server</TableCell>
            <TableCell>8.8.4.4</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
export const StatusLANInfo = () => {
  return (
    <div>
      <Table className="container mx-auto border border-t-0">
        <TableHeader>
          <TableRow>
            <TableHead>Port</TableHead>
            <TableHead>Mode</TableHead>
            <TableHead>Speed</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Transmit Bytes</TableHead>
            <TableHead>Transmit Packets</TableHead>
            <TableHead>Recieve Bytes</TableHead>
            <TableHead>Recieve Packets</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Half</TableCell>
            <TableCell>10</TableCell>
            <TableCell>Up</TableCell>
            <TableCell>95832648474</TableCell>
            <TableCell>134844895</TableCell>
            <TableCell>141351512131</TableCell>
            <TableCell>134019340</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Half</TableCell>
            <TableCell>1000</TableCell>
            <TableCell>Up</TableCell>
            <TableCell>1232456473431</TableCell>
            <TableCell>31418734883</TableCell>
            <TableCell>387538381312</TableCell>
            <TableCell>913041341</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Half</TableCell>
            <TableCell>10000</TableCell>
            <TableCell>Down</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
            <TableCell>0</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Half</TableCell>
            <TableCell>1000</TableCell>
            <TableCell>Up</TableCell>
            <TableCell>125850046655</TableCell>
            <TableCell>1348910384</TableCell>
            <TableCell>19911676596</TableCell>
            <TableCell>86565136</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
