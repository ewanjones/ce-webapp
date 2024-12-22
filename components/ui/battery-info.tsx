import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BatteryInfoProps {
  serialNumber: string;
  chargeLevel?: number;
  current: number;
  voltage: number;
  capacity: number;
  lastCharged?: Date;
}

export function BatteryInfo({ serialNumber, chargeLevel, voltage, current, capacity, lastCharged }: BatteryInfoProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Serial Number</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{serialNumber}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery Specs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-m font-bold">Voltage: {voltage}V</div>
          <div className="text-m font-bold">Current: {current}A</div>
          <div className="text-m font-bold">Capacity: {capacity}kWh</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Current Charge</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{chargeLevel}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Last Charged</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lastCharged?.toString()}</div>
        </CardContent>
      </Card>
    </div>
  )
}
