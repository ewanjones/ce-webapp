"use client"

import { useState } from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { BatteryInfo } from "@/components/ui/battery-info"
import { ChargeLevelChart } from "@/components/ui/charge-level-chart"
import { AssetData} from './types'



type Props = {
  assets: AssetData[];
}


type ChargeLevelEntry = {
  time: string;
  level: number;
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

export default function DashboardPage(props: Props ) {

  const property = props.assets[0]
  const batteries = property.assets
  const [selectedBattery, setSelectedBattery] = useState(batteries[0])
  // const lastEvent = (selectedBattery.events) ? selectedBattery.events[-1] : null
  const lastEvent = selectedBattery.events[selectedBattery.events.length - 1]



  return (
    <div className="flex h-screen">
      <Sidebar
        address={property.address}
        batteries={batteries}
        selectedBattery={selectedBattery}
        onSelectBattery={setSelectedBattery}
      />
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6">Battery Dashboard</h1>
        <BatteryInfo
          serialNumber={selectedBattery.serial_number}
          chargeLevel={lastEvent?.charge_percent}
          voltage={selectedBattery.voltage}
          current={selectedBattery.current}
          capacity={selectedBattery.capacity_kwh}
          lastCharged={lastEvent?.occurred_at}
        />
        <div className="mt-6">
          <ChargeLevelChart data={chargeLevelData} />
        </div>
      </main>
    </div>
  )
}
