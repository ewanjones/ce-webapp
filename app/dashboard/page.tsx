"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { BatteryInfo } from "@/components/ui/battery-info"
import { ChargeLevelChart } from "@/components/ui/charge-level-chart"


type BatteryData = {
  [key: string]: {
    chargeLevel: number;
    health: number;
    lastCharged: string;
  };
};

type ChargeLevelEntry = {
  time: string;
  level: number;
};

// Mock data for demonstration
const batteries = ["BAT001", "BAT002", "BAT003", "BAT004", "BAT005"]
const batteryData: BatteryData = {
  "BAT001": { chargeLevel: 85, health: 98, lastCharged: "2023-05-15 14:30" },
  "BAT002": { chargeLevel: 72, health: 95, lastCharged: "2023-05-14 09:15" },
  "BAT003": { chargeLevel: 93, health: 99, lastCharged: "2023-05-15 18:45" },
  "BAT004": { chargeLevel: 65, health: 92, lastCharged: "2023-05-13 22:00" },
  "BAT005": { chargeLevel: 88, health: 97, lastCharged: "2023-05-15 11:20" },
}

const chargeLevelData: ChargeLevelEntry[] = [
  { time: "00:00", level: 60 },
  { time: "04:00", level: 40 },
  { time: "08:00", level: 30 },
  { time: "12:00", level: 70 },
  { time: "16:00", level: 90 },
  { time: "20:00", level: 80 },
  { time: "24:00", level: 60 },
]

export default function DashboardPage() {
  const [selectedBattery, setSelectedBattery] = useState(batteries[0])

  return (
    <div className="flex h-screen">
      <Sidebar
        batteries={batteries}
        selectedBattery={selectedBattery}
        onSelectBattery={setSelectedBattery}
      />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Battery Dashboard</h1>
        <BatteryInfo
          serialNumber={selectedBattery}
          chargeLevel={batteryData[selectedBattery].chargeLevel}
          health={batteryData[selectedBattery].health}
          lastCharged={batteryData[selectedBattery].lastCharged}
        />
        <div className="mt-6">
          <ChargeLevelChart data={chargeLevelData} />
        </div>
      </main>
    </div>
  )
}
