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
import { useRouter } from "next/navigation"
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import axios, { AxiosError } from "axios"
import { useQueryClient } from "react-query"
import Link from "next/link"


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
        const monja = row.original
        const id = monja.id
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
              <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent pb-2">
              <AlertDialog >
                    <AlertDialogTrigger className="cursor-select" asChild>
                        <span>Apagar Monja</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Deseja mesmo apagar esta Monja?</AlertDialogTitle>
                        <AlertDialogDescription>
                            Esta ação não pode ser revertida.
                        </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={
                        async () =>{
                         try{
                          const res = await axios.post(`/api/apagar_monja/${id}`);
                          await useQueryClient().invalidateQueries({ queryKey: ['tabelaRow'] }); // Invalidates the query cache
                          await useQueryClient().refetchQueries({ queryKey: ['tabelaRow'] } ); // Refetches the 'tabelaRow' query
                          toast.success('Monja apagada');
                 
                        }catch (error){
                          if (axios.isAxiosError(error)) {
                            const axiosError = error as AxiosError;
                            if (axiosError.response) {
                              const str = JSON.stringify(axiosError.response.data).replaceAll('"', '');
                              toast.error(str);
                            }
                          }
                        }
                        }} className="bg-red-600 text-white hover:bg-red-400">Apagar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
              <DropdownMenuSeparator />
              <Link href={`/monja/${monja.id}`}><DropdownMenuItem >Ver Monja</DropdownMenuItem></Link>
              <Link href={`/editar_monja//${monja.id}`}><DropdownMenuItem >Editar Monja</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
  },
]
