import {z} from 'zod';


export const NewOrder = z.object({
    amount: z.number().nonnegative(),
})

export type NewOrder = z.infer<typeof NewOrder>

export const OrderState = z.literal("created").or(z.literal("fulfilled"))
export type OrderState = z.infer<typeof OrderState>

export const Order = z.object({
    id: z.string(),
    amount: z.number().nonnegative(),
    state: OrderState,
    created_at: z.string(),
    updated_at: z.string(),
    fulfilled_by: z.string().optional()
})
export type Order = z.infer<typeof Order>;

// export interface OrderEvent {
//     id: string
//     amount: number
//     state: "created" | "fulfilled"
//     created_at: string
//     updated_at: string
//     fulfilled_by?: string
// }

export type OrderEvent = `order.${OrderState}`
