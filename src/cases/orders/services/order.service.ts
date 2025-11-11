import { api } from "../../../lib/axios";
import type { OrderDTO } from "../dtos/order.dto";

const endpoint = "/order";

export const orderService = {

    async list(): Promise<OrderDTO[]>{
        const result = await api.get<OrderDTO[]>(endpoint);
        return result.data;
    },

    async getById(id: string): Promise<OrderDTO>{
        const result = await api.get<OrderDTO>(`${endpoint}/${id}`);
        return result.data;
    },
}