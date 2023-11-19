"use client"
import LivroCard from "@/components/livro";
import { Button } from "@/components/ui/button";
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";
import useSWR from "swr";


export default function LivroPage (){  
  const { data, isLoading } = useSWR<Livro[]>("/api/get_livros", fetcher);  
  
  return (
    <>
      <div className="flex p-4 justify-center items-center">
        <span className="font-bold text-5xl">Monjas</span>
      </div>
      <div className="flex p-4 justify-center items-center ">
        <div className="ml-3">
          <Button>Criar Livro</Button>
        </div>
      </div>
      { data && data.length > 0  &&(
      <div className="p-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {data.map((livro, index) => {
          return <LivroCard livro={livro} key={index} />
        })}
      </div> 
      )
    }
    </>
  )
}





