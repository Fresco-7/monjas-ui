"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"


export type Monja = {
    id : string
    nome : string
    camposId: String[]
    BastardaLegitima :string
    LinhagemFamiliar : string
    NomeReligioso : string
    Idade : string
    DataDeNascimento : string
    TempoDeNoviciado : string
    LocalDeBatismo : string
    Pai : string
    AvoPaterno : string
    AvoPaterna : string
    Mae : string
    AvoMaterno : string
    AvoMaterna : string
    FreirasParentesco : string
    Irmaos : string
    Observacoes : string
    ReferenciaId: string 
}

export const columns: ColumnDef<Monja>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },

    {
        accessorKey: "id",
        header: "Monja Id",
        
    },
    {
        accessorKey: "nome",
        header: "Nome",
        
    },
    {   
        accessorKey: "DataDeNascimento",
        header: "Data de Nascimento",
    },
    {   
        accessorKey: "NomeReligioso",
        header: "Nome Religioso",
    },
]
