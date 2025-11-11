import { DataTable } from "@/components/ui/data-table";
import { brandColumns } from "./brand-columns";
import { useBrand } from "../../hooks/use-brand";
import LoadingScreen from "@/components/layout/loading-screen";

export function BrandDataTable() {

    const{data:brands, isLoading} = useBrand();

    return(
        <div>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <DataTable columns={brandColumns} data={brands!}/>
            )}
        </div>
    )
}