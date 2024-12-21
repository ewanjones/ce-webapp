import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  batteries: string[];
  selectedBattery: string;
  onSelectBattery: (battery: string) => void;
}

export function Sidebar({ batteries, selectedBattery, onSelectBattery }: SidebarProps) {
  return (
    <div className="w-64 border-r bg-gray-100/40 dark:bg-gray-800/40">
      <div className="p-4">
        <h2 className="mb-4 text-lg font-semibold">Batteries</h2>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          {batteries.map((battery) => (
            <Button
              key={battery}
              variant={selectedBattery === battery ? "secondary" : "ghost"}
              className="w-full justify-start mb-1"
              onClick={() => onSelectBattery(battery)}
            >
              {battery}
            </Button>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}
