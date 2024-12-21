import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BatteryInfoProps {
  serialNumber: string;
  chargeLevel: number;
  health: number;
  lastCharged: string;
}

export function BatteryInfo({ serialNumber, chargeLevel, health, lastCharged }: BatteryInfoProps) {
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
          <CardTitle className="text-sm font-medium">Current Charge</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{chargeLevel}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{health}%</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Last Charged</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{lastCharged}</div>
        </CardContent>
      </Card>
    </div>
  )
}
