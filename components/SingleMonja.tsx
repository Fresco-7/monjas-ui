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
            (<>     <div className="flex p-4 justify-center items-center">
                    <span className="font-bold text-5xl">Monja : {data.monja.nome}</span>
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
