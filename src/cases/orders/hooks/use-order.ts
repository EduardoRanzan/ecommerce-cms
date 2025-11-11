import { useQuery } from "@tanstack/react-query";
import { orderService } from "../services/order.service";

export function useOrder () {
    return useQuery({
        queryKey: ['order'],
        queryFn: () => orderService.list(),
    });
}

export function useOrderById(id: string) {
    return useQuery({
        queryKey: ['order', id],
        queryFn: () => orderService.getById(id),
        enabled: !!id,
    });
}