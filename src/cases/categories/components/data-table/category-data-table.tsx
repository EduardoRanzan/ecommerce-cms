import { DataTable } from "@/components/ui/data-table";
import { categoryColumns } from "./category-columns";
import { useCategory } from "../../hooks/use-category";
import LoadingScreen from "@/components/layout/loading-screen";

export function CategoryDataTable() {

    const{data:categories, isLoading} = useCategory();

    return(
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <DataTable columns={categoryColumns} data={categories!}/>
            )}
        </div>
    )
}