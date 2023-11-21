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
            </DropdownMenuContent>
          </DropdownMenu>
    )
}
export default RowSelect;




