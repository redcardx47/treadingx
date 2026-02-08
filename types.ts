// TypeScript interfaces

export interface Tab {
    id: string;
    title: string;
}

export interface Market {
    id: string;
    name: string;
    price: number;
}

export interface Position {
    marketId: string;
    quantity: number;
}

export interface Trade {
    position: Position;
    price: number;
    timestamp: Date;
}

export interface UserState {
    balance: number;
    positions: Position[];
    trades: Trade[];
}