import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { categoryService } from "../services/category.service";
import type { CategoryDTO } from "../dtos/category.dto";
import { toast } from "react-toastify";

export function useCategory() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryService.list(),
    });
}

export function useCategoryById(id: string) {
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => categoryService.getById(id),
        enabled: !!id,
    });
}

export function useCreateCategory(){
    const queryClient = useQueryClient();

    return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>>({
        mutationFn: (category: Omit<CategoryDTO, 'id'>) => categoryService.create(category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
            toast.success('Categoria criada com sucesso!');
        }, onError: (error: Error) => {
            toast.error(`Erro ao criar categoria: ${error.message}`);
        }
    });
}

export function useUpdateCategory(){
    const queryClient = useQueryClient();

    return useMutation<CategoryDTO, Error, {id: string, category: CategoryDTO}>({
        mutationFn: ({id, category}) => categoryService.update(id, category),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
            toast.success('Categoria atualizada com sucesso!');
        }, onError: (error: Error) => {
            toast.error(`Erro ao atualizar categoria: ${error.message}`);
        }
    });
}

export function useDeleteCategory(){
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (id: string) => categoryService.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['categories'] });
            toast.success('Categoria deletada com sucesso!');
        }   , onError: (error: Error) => {
            toast.error(`Erro ao deletar categoria: ${error.message}`);
        }
    });
}