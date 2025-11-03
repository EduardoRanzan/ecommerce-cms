import { useMutation, useQuery } from "@tanstack/react-query";
import { brandService} from "../services/brand.service";
import type { BrandDTO } from "../dtos/brand.dto";

export function useBrand () {
    return useQuery({
        queryKey: ['brands'],
        queryFn: () => brandService.list(),
    });
}

export function useBrandById(id: string) {
    return useQuery({
        queryKey: ['brands', id],
        queryFn: () => brandService.getById(id),
        enabled: !!id,
    });
}

export function userCreateBrand(){
    return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({
        mutationFn: (brand: Omit<BrandDTO, 'id'>) => brandService.create(brand),
    });
}

export function userUpdateBrand(){
    return useMutation<BrandDTO, Error, {id: string, brand: BrandDTO}>({
        mutationFn: ({id, brand}) => brandService.update(id, brand)
    });
}

export function userDeleteBrand(){
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => brandService.delete(id)
    });
}