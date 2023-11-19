"use client"
import { Campo, Monja } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "@/app/monja-columns";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Link from "next/link";


const SingleMonja = ({ data, id }: { data: any, id : any }) => {
    const campos = data.campos as Campo[]

    const router = useRouter();
    return(
        <>  
            <div className="p-4 flex justify-center items-center">
                <AlertDialog >
                    <AlertDialogTrigger asChild>
                        <Button>Apagar Monja</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                        <AlertDialogTitle>Deseja mesmo apagar a monja?</AlertDialogTitle>
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
                          toast.success('Monja apagada');
                          router.push('/');
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
                <div className="ml-3">
                    <Link href={`/editar_monja/${data?.monja.id}`}><Button
                    >Editar Monja</Button></Link>
                </div>
                <div className="ml-3">
                <Link href={`/criar_campo/${data?.monja.id}`}><Button>Criar Campo</Button></Link>
                </div>
            </div>
            <div>
                <DataTable columns={columns} data={campos}></DataTable>
            </div>
        </>
    )
}
export default SingleMonja;
