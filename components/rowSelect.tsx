import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Monja } from "@prisma/client";
import { Button } from "./ui/button";
import { MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";


export function RowSelect( {monja} : {monja : Monja}) {
  const router = useRouter();
    return(
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
              <Link href={`/monja/${monja.id}`}><DropdownMenuItem >Ver Monja</DropdownMenuItem></Link>
              <Link href={`/editar_monja/${monja.id}`}><DropdownMenuItem >Editar Monja</DropdownMenuItem></Link>
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
                          const res = await axios.post(`/api/apagar_monja/${monja.id}`);
                          toast.success('Monja apagada');
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
                        }} className="bg-red-600 text-white hover:bg-red-400">Apagar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
    )
}
export default RowSelect;




