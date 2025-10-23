import { DataTable } from "@/components/ui/data-table";
import { categoryColumns } from "./category-columns";
import { useCategory } from "../../hooks/use-category";

export function CategoryDataTable() {

    const{data:categories, isLoading} = useCategory();

    return(
        <div>
            {isLoading ? (
                <p>Carregando</p>
            ) : (
                <DataTable columns={categoryColumns} data={categories!}/>
            )}
        </div>
    )
}