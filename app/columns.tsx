"use client"

import { ColumnDef } from "@tanstack/react-table"
import RowSelect from "@/components/rowSelect"
import { Monja } from "@prisma/client"


export const columns: ColumnDef<tabelaRow>[] = [
  
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
      accessorKey: "avosPaternos",
      header: "Avôs Paternos",
    },       
    {   
      accessorKey: "mae",
      header: "Mãe",
    },  
    {   
      accessorKey: "avosMaternos",
      header: "Avôs Maternos",
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
