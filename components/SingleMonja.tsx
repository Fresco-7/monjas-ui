"use client"
import { Campo, Monja } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "@/app/monja-columns";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";


const SingleMonja = ({ data, id }: { data: any, id : any }) => {
    const campos = data.campos as Campo[]
    const router = useRouter();
    return(
        <>  
            <div className="p-4 flex justify-center items-center">
                <AlertDialog >
                    <AlertDialogTrigger asChild>
                        <Button onClick={
                        async () =>{
                         try{
                          const res = await axios.post(`/api/apagar_monja/${id}`);
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
                        }}>Apagar Monja</Button>
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
                        <AlertDialogAction className="bg-red-600 text-white hover:bg-red-400">Apagar</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <div className="ml-3">
                    <Button onClick={() => {
                        router.push(`/editar_monja/${data?.monja.id}`)
                    }}>Editar Monja</Button>
                </div>
                <div className="ml-3">
                    <Button onClick={() => {
                        router.push('/criar_campo/'+ data?.monja.id)
                    }}>Criar Campo</Button>
                </div>
            </div>
            <div>
                <DataTable columns={columns} data={campos}></DataTable>
            </div>
        </>
    )
}
export default SingleMonja;
