"use client"

import MonjaRelacao from "@/components/MonjaRelacao";
import PageError from "@/components/errorPage";
import LivroCard from "@/components/livro";
import { Button } from "@/components/ui/button";
import fetcher from "@/lib/fetcher";
import { Livro, Monja, RelacoesFamiliares } from "@prisma/client";
import Link from "next/link";
import useSWR from "swr";

export default function RelacaoPage({ params }: { params: { id: string } }) {
    const { data, isLoading, error : isError }  = useSWR(`/api/get_relacoes/${params.id}`, fetcher);  
    const { data : dataMonja, isLoading : isLoadingMonja} = useSWR<Monja>(`/api/get_monja/${params.id}`, fetcher);


    let monjaById: { [key: string]: Monja } = {};
    if(isLoading || isLoadingMonja ){
      return(
      <>
        <div>      
        </div>
      </>
      )
    }
    if (data && data.relacoes) {
      data.monjas.forEach((monja: Monja) => {
        monjaById[monja.id] = monja;
      });
    }


    if(dataMonja?.id){
      return (
        <>
          <div className="flex p-4 justify-center items-center">
            <span className="font-bold text-5xl">Monjas</span>
          </div>
          <div className="flex p-4 justify-center items-center">
            <span className="font-bold text-3xl">Relações da Monja {dataMonja.nome}</span>
          </div>
          <div className="flex p-4 justify-center items-center ">
            <Link href={`/criar_relacao`}><Button>Criar Relação</Button></Link>
          </div>
            {data.relacoes != null ?(
                  <>
                  <div className="p-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 ">
                    {data.relacoes.map((relacao : RelacoesFamiliares, index : any) => {
                      const firstMonja = monjaById[relacao.firstMonjaId];
                      const secondMonja = monjaById[relacao.secondMonjaId];
                      return <MonjaRelacao relacao={relacao} monjaA={firstMonja} monjaB={secondMonja} key={index} />
                    })}
                  </div>
                  </>
                ):(
                    <div className='flex  justify-center h-full w-full '>
                      <div className='flex flex-col w-full h-full mt-10 justify-center items-center'>
                        <span className='text-md bold'>Sem relações disponiveis</span>
                        <Link href="/"><span className='text-blue-300 cursor-pointer'>pagina inicial</span></Link>
                      </div>
                    </div>
            )}
        </>
      )  
    }
    return(
      <PageError />
    )
}