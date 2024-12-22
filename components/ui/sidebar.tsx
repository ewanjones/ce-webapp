import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Asset } from "@/app/dashboard/types"


interface SidebarProps {
  address?: string;
  batteries: Asset[];
  selectedBattery: Asset;
  onSelectBattery: (battery: Asset) => void;
}

export function Sidebar({ address, batteries, selectedBattery, onSelectBattery }: SidebarProps) {
  return (
    <div className="w-64 border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="p-4">
        <p className="text-sm pb-4">{address}</p>
        <h2 className="mb-4 text-lg font-semibold">Batteries</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {batteries.map((battery) => (
            <Button
              key={battery.serial_number}
              variant={selectedBattery.serial_number === battery.serial_number ? "secondary" : "ghost"}
              className="w-full justify-start mb-1"
              onClick={() => onSelectBattery(battery)}
            >
              {battery.serial_number}
            </Button>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
