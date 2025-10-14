import { api } from "../../../lib/axios";
import type { CategoryDTO } from "../dtos/category.dto";

const endpoint = "/categories";

export const categoryService = {

    async list(): Promise<CategoryDTO[]>{
        const result = await api.get<CategoryDTO[]>(endpoint);
        return result.data;
    },

    async create(category: CategoryDTO): Promise<CategoryDTO>{
        const result = await api.post<CategoryDTO>(endpoint, category);
        return result.data;
    },

    async getById(id: string): Promise<CategoryDTO>{
        const result = await api.get<CategoryDTO>(`${endpoint}/${id}`);
        return result.data;
    },

    async update(id: string, category: CategoryDTO): Promise<CategoryDTO>{
        const result = await api.put<CategoryDTO>(`${endpoint}/${id}`, category);
        return result.data;
    },

    async delete(id: string): Promise<void>{
        await api.delete<void>(`${endpoint}/${id}`);
    }
}