"use client"
import LivroCard from "@/components/livro";
import { Button } from "@/components/ui/button";
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";
import Link from "next/link";
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
          <Link href={"/criar_livro"}><Button>Criar Livro</Button></Link>
        </div>
      </div>
      { data && data.length > 0  ?(
      <div className="p-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
        {data.map((livro, index) => {
          return <LivroCard livro={livro} key={index} />
        })}
      </div>
      ):(<div className='flex  justify-center h-full w-full '>
        <div className='flex flex-col w-full h-full mt-10 justify-center items-center'>
          <span className='text-md bold'>Sem livros disponiveis</span>
          <Link href="/"><span className='text-blue-300 cursor-pointer'>pagina inicial</span></Link>
        </div>
      </div>)}
    </>
  )
}





