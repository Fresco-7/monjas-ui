"use client"

import LivroCard from "@/components/livro";
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";
import useSWR from "swr";

export default function LivroPage({ params }: { params: { id: string } }) {
    
    const { data, isLoading, error : isError } = useSWR<Livro>(`/api/get_livro/${params.id}`, fetcher);  

    if(isLoading){
        return(
            <>
            </>
        )
    }
    return (
      <>
        <div className="p-10">
          <LivroCard livro={data as Livro}/>
        </div>
      </>
    )
}

