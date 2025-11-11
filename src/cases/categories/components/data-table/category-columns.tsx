import type { ColumnDef } from "@tanstack/react-table";
import type { CategoryDTO } from "../../dtos/category.dto";
import { DataTableAction } from "@/components/layout/data-table-action";

export const categoryColumns: ColumnDef<CategoryDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome da Categoria",
  },
  {
    enableHiding: false,
    accessorKey: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return (
        <div className="flex justify-end mr-5">
          <DataTableAction id={category.id}></DataTableAction>
        </div>
      )
    }
  }
];