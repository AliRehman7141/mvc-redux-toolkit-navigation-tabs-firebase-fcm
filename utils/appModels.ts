import { ORDER_STATUS } from "./appEnums";

interface UserData {
    id: number
    name: string,
    email: string,
    updated_at: string,
    created_at: string,
}

interface DeliveryOrder {
    id?: number;
    name?: string;
    email?: string;
    package_size?: "small" | "medium" | "large";
    package_weight?: number;
    weight_metric?: "kg" | "lb";
    number_of_items?: number;
    delivery_time?: string;
    pickup_time?: string;
    status?: ORDER_STATUS;
    canceled_by?: string | null;
    pickup_city?: string;
    pickup_address?: string;
    delivery_city?: string;
    delivery_address?: string;
    phone_number?: string;
    mobile_key?: string;
    created_at?: string;
    updated_at?: string;
    customer_id?: number;
}

interface Stats {
    [key: string]: number;
}

export type {
    UserData,
    DeliveryOrder,
    Stats,
}