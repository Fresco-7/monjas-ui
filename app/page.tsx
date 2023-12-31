"use client"
import { columns } from "@/app/columns"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button";
import fetcher from "@/lib/fetcher";
import Link from "next/link";
import useSWR from "swr";


export default function HomePage (){  
  const { data, isLoading, error : isError } = useSWR<tabelaRow[]>("/api/get_monjas", fetcher);  

  if(isLoading){
    return(
      <>
        <div>
          
        </div>
      </>
    )
  }
    return (
      <>
      <div className=" overflow-x-hidden justify-center">

        <div className="flex p-4 justify-center items-center">
          <span className="font-bold text-5xl">Monjas</span>
        </div>
        
        <div className="flex p-4 justify-center items-center ">
        <Link href={`/criar_monja`}><Button>Criar Monja</Button></Link>
        </div>
          <div className="p-10 grid grid-cols-1 gap-6">
            <DataTable columns={columns} data={data || []}/>
          </div>
      </div>
      </>
    )  
}


