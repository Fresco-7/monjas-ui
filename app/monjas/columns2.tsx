"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import toast from "react-hot-toast"
import { MoreHorizontal } from "lucide-react"

export type Monja = {
    id : string
    nome : string
    camposId?: String[]
    BastardaLegitima? :string
    LinhagemFamiliar? : string
    NomeReligioso? : string
    Idade? : string
    DataDeNascimento? : string
    TempoDeNoviciado? : string
    LocalDeBatismo? : string
    Pai? : string
    AvoPaterno? : string
    AvoPaterna? : string
    Mae? : string
    AvoMaterno? : string
    AvoMaterna? : string
    FreirasParentesco? : string
    Irmaos? : string
    Observacoes? : string
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
        accessorKey: "nome",
        header: "Nome",
    },
    {   
        accessorKey: "filiacao",
        header: "Filiação",
    },
    {   
        accessorKey: "linhagemFamiliar",
        header: "Linhagem Familiar",
    },
    {   
      accessorKey: "idade",
      header: "idade",
    },
    {   
      accessorKey: "DataNascimento",
      header: "Data de Nascimento",
    },
    {   
      accessorKey: "tempoNoviciado",
      header: "Tempo de Noviciado",
    },
    {   
      accessorKey: "NomeReligioso",
      header: "Nome Religioso",
    },
    {   
      accessorKey: "naturalidadeBatismo",
      header: "Naturalidade / Batismo",
    },
    {   
      accessorKey: "pai",
      header: "Pai",
    },
    {   
      accessorKey: "avoPaterno",
      header: "Avô Paterno",
    },    
    {   
      accessorKey: "avoPaterna",
      header: "Avó Paterna",
    },    
    {   
      accessorKey: "mae",
      header: "Mãe",
    },  
    {   
      accessorKey: "avoMaterno",
      header: "Avô Materno",
    },
    {   
      accessorKey: "avoMaterna",
      header: "Avó Materna",
    },
    {   
      accessorKey: "freirasParentesco",
      header: "Freiras Parentesco",
    },
    {   
      accessorKey: "irmaos",
      header: "Irmãos",
    },
    {   
      accessorKey: "observacoes",
      header: "Observações",
    },
    
    {
      id: "actions",
      cell: ({ row }) => {
        const monja = row.original
   
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  navigator.clipboard.writeText(monja.id);
                  toast.success('Id da Monja copiado');
              }}
              >
                Copiar id Monja
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ver Monja</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
  },
]
