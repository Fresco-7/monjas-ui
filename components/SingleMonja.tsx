"use client"
import { DataTable } from "./data-table";
import { columns } from "@/app/monja-columns";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import PageError from "./errorPage";
import { Livro } from "@prisma/client";


const SingleMonja = ({ id }: {id : any }) => {
    const { data, isLoading} = useSWR(`/api/get_campos/${id}`, fetcher);  
    const router = useRouter();


    if(isLoading){
        return(
            <>
            </>
        )
    }
    return(
        <>  
        {data.monja?
            (<>     
                <div className="flex p-4 justify-center items-center">
                    <span className="font-bold text-5xl">Monja : {data.monja.nome}</span>
                </div>
                { data.livros &&(
                        <div className="flex pt-1 justify-center items-center">
                            <span className="font-light text-md">Fontes: {
                                data.livros.map((livro : Livro) => (
                                    <>
                                        <span key={livro.id}>{livro.nome}{' '}</span>
                                    </>
                                ))}</span>
                        </div>
                    )
                }
                <div className="p-4 flex justify-center items-center">
                <div className="flex flex-wrap gap-3 md:flex-row md:justify-center md:items-center">
                    <Link href={`/relacoes/${id}`}><Button>Ver Relações</Button></Link>
                    <Link href={`/editar_monja/${id}`}><Button>Editar Monja</Button></Link>
                    <Link href={`/criar_campo/${id}`}><Button>Criar Campo</Button></Link>
                </div>
                </div>
            
                <div>
                    <DataTable columns={columns} data={data.campos}></DataTable>
                </div>
            </>
           ):(<PageError/>)}
        </>
    )
}
export default SingleMonja;
