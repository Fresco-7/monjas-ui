"use client"
import LivroCard from "@/components/livro";
import { Button } from "@/components/ui/button";
import { Livro } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";


const LivroPage = () => {
  const router = useRouter();

  const {data, isLoading, isError, refetch} = useQuery({
    queryKey: ['livros'],
    queryFn : async () => {
        const {data} = await axios.get('/api/get_livros');
        return data.books as Livro[]
    }
  })
  const handleRefresh = () => {
    refetch();
  };


  if(isLoading){
    return(
      <>

      </>
    )
  }
  
  if(data && !isLoading && !isError){
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
        <div className="p-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                {data.map((livro) => (
                    <LivroCard key={livro.id} livro={livro} handleRefresh={handleRefresh} />
                ))}
        </div> 
      </>
    )
  }else{
    <div>
      aa
    </div>
  }
}
export default LivroPage;