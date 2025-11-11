import { DataTable } from "@/components/ui/data-table";
import { productColumns } from "./product-columns";
import { useProducts } from "../../hooks/use-product";
import LoadingScreen from "@/components/layout/loading-screen";

export function ProductDataTable() {

    const {data: products, isLoading} = useProducts();

    return (
        <div>
            { isLoading ? (
                <LoadingScreen />
            ) : (
                <DataTable columns={productColumns} data={products!} />
            )}
        </div>

    )
}