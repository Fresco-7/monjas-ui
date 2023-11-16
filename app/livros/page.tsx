"use client"
import LivroCard from "@/components/livro";
import { Button } from "@/components/ui/button";
import { Livro } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";


const LivroPage = () => {
  const router = useRouter();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['tabelaRow'],
    queryFn : async () => {
        const {data} = await axios.get('/api/get_livros');
        return data.books as Livro[]
    }
  })

  if(isLoading){
    return(
      <>
        <div>
          
        </div>
      </>
    )
  }
  
  if(data){
  return (
    <>
      <div className="flex p-4 justify-center items-center">
        <span className="font-bold text-5xl">Monjas</span>
      </div>
      <div className="flex p-4 justify-center items-center ">
          <div className="ml-3"><Button onClick={() =>{
            router.push('/criar_livro');
          }}>Criar Livro</Button></div>
      </div>
        {data.length > 0 ?   <div className="p-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {data?.map((livro) => (
                    <LivroCard livro={livro} />
                ))}
            </div> : <h1 className="text-3xl"> Sem livros </h1>
        }
    </>
  )
}
}
export default LivroPage;