import { useMutation, useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/category.service";
import type { CategoryDTO } from "../dtos/category.dto";

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

export function userCreateCategory(){
    return useMutation<CategoryDTO, Error, Omit<CategoryDTO, 'id'>>({
        mutationFn: (category: Omit<CategoryDTO, 'id'>) => categoryService.create(category),
    });
}

export function userUpdateCategory(){
    return useMutation<CategoryDTO, Error, {id: string, category: CategoryDTO}>({
        mutationFn: ({id, category}) => categoryService.update(id, category)
    });
}

export function userDeleteCategory(){
    return useMutation<void, Error, string>({
        mutationFn: (id: string) => categoryService.delete(id)
    });
}