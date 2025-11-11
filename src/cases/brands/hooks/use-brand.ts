import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { brandService} from "../services/brand.service";
import type { BrandDTO } from "../dtos/brand.dto";
import { toast } from "react-toastify";

export function useBrand () {
    console.log('aqui?')
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

export function useCreateBrand(){
    const queryClient = useQueryClient();

    return useMutation<BrandDTO, Error, Omit<BrandDTO, 'id'>>({
        mutationFn: (brand: Omit<BrandDTO, 'id'>) => brandService.create(brand),
        onSuccess: () => {
            console.log('aquiiii')
            queryClient.invalidateQueries({ queryKey: ['brands'] });
            toast.success('Marca criada com sucesso!');
        }, onError: (error: Error) => {
            toast.error(`Erro ao criar Marca: ${error.message}`);
        }
    }); 
}

export function useUpdateBrand(){
    const queryClient = useQueryClient();
    
    return useMutation<BrandDTO, Error, {id: string, brand: BrandDTO}>({
        mutationFn: ({id, brand}) => brandService.update(id, brand),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] });
            toast.success('Marca atualizada com sucesso!');
        }, onError: (error: Error) => {
            toast.error(`Erro ao atualizar marca: ${error.message}`);
        }
    });
}

export function useDeleteBrand(){
    const queryClient = useQueryClient();
    
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => brandService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['brands'] });
            toast.success('Marca deletada com sucesso!');
        }   , onError: (error: Error) => {
            toast.error(`Erro ao deletar marca: ${error.message}`);
        }
    });
}