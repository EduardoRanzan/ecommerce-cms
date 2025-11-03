import type { ColumnDef } from "@tanstack/react-table";
import type { BrandDTO } from "../../dtos/brand.dto";

export const brandColumns: ColumnDef<BrandDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome da Categoria",
  },
];