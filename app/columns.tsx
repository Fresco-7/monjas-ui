"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import RowSelect from "@/components/rowSelect"
import { Monja } from "@prisma/client"


export const columns: ColumnDef<tabelaRow>[] = [
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
      accessorKey: "dataNascimento",
      header: "Data de Nascimento",
    },
    {   
      accessorKey: "tempoDeNoviciado",
      header: "Tempo de Noviciado",
    },
    {
      accessorKey: "nomeSecular",
      header: "Nome Secular",
    },
    {   
      accessorKey: "nomeReligioso",
      header: "Nome Religioso",
    },
    {   
      accessorKey: "naturalidadeBatismo",
      header: "Naturalidade / Batismo",
    },
    {
      accessorKey : "qualidadeCargo",
      header : "Qualidade / Cargo",
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

        const monja = row.original as Monja

        return(
          <>
            <RowSelect monja={monja} />
          </>
        )
        
      },
  },
]
