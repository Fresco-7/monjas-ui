"use client"
import { DataTable } from "./data-table";
import { columns } from "@/app/columns";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";


const MonjasLivro = ({ id }: {id : any }) => {
    const { data, isLoading} = useSWR(`/api/get_monjasLivro/${id}`, fetcher);  
    const {data : livro, isLoading : isLoadingLivro} = useSWR<Livro>(`/api/get_livro/${id}`, fetcher);

    if(isLoading || isLoadingLivro){
        return(
            <>
            </>
        )
    }

    return(
        <>  
            <div className="flex p-4 justify-center items-center">
                <span className="font-bold text-5xl">                {livro?.nome}
                </span>
            </div>
            <div>
                <DataTable columns={columns} data={data}></DataTable>
            </div>
        </>
    )
}
export default MonjasLivro;
