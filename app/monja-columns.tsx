"use client"

import { ColumnDef } from "@tanstack/react-table"
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
import { useRouter } from "next/navigation"
import { Campo } from "@prisma/client"
import axios, { AxiosError } from "axios";
import Link from "next/link";


export const columns: ColumnDef<Campo>[] = [
  {
    accessorKey: "livroDoLivro",
    header: "livroDoLivro",
  },
  {
    accessorKey: "pagina",
    header: "Pagina",
  },
  {   
    accessorKey: "nrFolio",
    header: "NrFolio",
  },
  {   
    accessorKey: "datacaoReferencia",
    header: "Datação",
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
      accessorKey: "tempoNoviciado",
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
      header : "Qualidade / Cargo"
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
        const id = row.original.id
        const livroId = row.original.livroId
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
              
              <Link href={`/livro/${livroId}`}><DropdownMenuItem>
                Ver Livro
              </DropdownMenuItem></Link>
              <DropdownMenuSeparator />
              <Link href={`/editar_campo/${id}`}><DropdownMenuItem>
                Editar Campo
              </DropdownMenuItem></Link>
              
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]



  