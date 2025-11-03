import { DataTable } from "@/components/ui/data-table";
import { brandColumns } from "./brand-columns";
import { useBrand } from "../../hooks/use-brand";

export function BrandDataTable() {

    const{data:brands, isLoading} = useBrand();

    return(
        <div>
            {isLoading ? (
                <p>Carregando</p>
            ) : (
                <DataTable columns={brandColumns} data={brands!}/>
            )}
        </div>
    )
}