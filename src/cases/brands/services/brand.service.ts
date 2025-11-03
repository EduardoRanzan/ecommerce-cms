import { api } from "../../../lib/axios";
import type { BrandDTO } from "../dtos/brand.dto";

const endpoint = "/brands";

export const brandService = {

    async list(): Promise<BrandDTO[]>{
        const result = await api.get<BrandDTO[]>(endpoint);
        return result.data;
    },

    async create(brand: BrandDTO): Promise<BrandDTO>{
        const result = await api.post<BrandDTO>(endpoint, brand);
        return result.data;
    },

    async getById(id: string): Promise<BrandDTO>{
        const result = await api.get<BrandDTO>(`${endpoint}/${id}`);
        return result.data;
    },

    async update(id: string, brand: BrandDTO): Promise<BrandDTO>{
        const result = await api.put<BrandDTO>(`${endpoint}/${id}`, brand);
        return result.data;
    },

    async delete(id: string): Promise<void>{
        await api.delete<void>(`${endpoint}/${id}`);
    }
}