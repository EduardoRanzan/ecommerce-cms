import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dtos/brand.dto";
import { DataTableAction } from "@/components/layout/data-table-action";

export const brandColumns: ColumnDef<BrandDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome da Categoria",
  },
  {
    accessorKey: "actions",
    enableHiding: true,
    cell: ({ row }) => {
      const brand = row.original;
      return (
        <div className="flex justify-end mr-5">
          <DataTableAction id={brand.id}></DataTableAction>
        </div>
      )
    }
  },
];