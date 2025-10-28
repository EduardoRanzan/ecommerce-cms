import { SideBarForm } from "@/components/layout/side-bar-form";
import { useParams } from "react-router-dom";
import { useCategoryById } from "../hooks/use-category";

export function CategoryForm() {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading } = useCategoryById(id ?? "");
    
    function handleSave() {
        
    }

    return (
        <SideBarForm title="Cadastro de Categoria" onSave={handleSave}>
            {
                isLoading ? (
                    <p>Carregando...</p>
                ) : (
                    <form className="space-y-4 mt-4">
                        <div>
                            <label className="block mb-1 font-medium">Nome</label>
                            <input
                                type="text"
                                defaultValue={data?.name ?? ""}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                    </form>
                )   
            }
        </SideBarForm>
    )
}