export type Event = {
  occurred_at: Date;
  direction: string;
  charge_percent: number;
};

export type Asset = {
  serial_number: string;
  capacity: number;
  current: number;
  voltage: number;
  events: Event[]
}

export type AssetData = {
  address: string;
  assets: Asset[];
}
