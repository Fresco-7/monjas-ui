"use client"

import { ColumnDef } from "@tanstack/react-table"
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
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
      accessorKey: "nomeReligioso",
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
        const id = row.original.id
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
              <Link href={`/editar_campo/${id}`}><DropdownMenuItem>
                Editar Campo
              </DropdownMenuItem></Link>
              <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent pb-2">
              <AlertDialog >
                    <AlertDialogTrigger className="cursor-select" asChild>
                        <span>Apagar Campo</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Deseja mesmo apagar este campo?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta ação não pode ser revertida.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={async () =>{
                          try{
                            const res = await axios.post(`/api/apagar_campo/${id}`);
                            toast.success('Campo apagado');
                            window.location.reload();
                          }catch (error){
                            if (axios.isAxiosError(error)) {
                              const axiosError = error as AxiosError;
                              if (axiosError.response) {
                                const str = JSON.stringify(axiosError.response.data).replaceAll('"', '');
                                toast.error(str);
                              }
                            }
                          }
                        }} 
                        className="bg-red-600 text-white hover:bg-red-400">Apagar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]



  