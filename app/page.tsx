"use client"
import { columns } from "@/app/columns"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";


const HomePage = () => {
  const router = useRouter();

  const {data, isLoading, isError} = useQuery({
    queryKey: ['tabelaRow'],
    queryFn : async () => {
        const {data} = await axios.get('/api/get_monjas');
        return data as tabelaRow[]
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
  
  return (
    <>
      <div className="flex p-4 justify-center items-center">
        <span className="font-bold text-5xl">Monjas</span>
      </div>
      <div className="flex p-4 justify-center items-center ">
          <Button onClick={() =>{
            router.push('/criar_monja');
          }}>Criar Monja</Button>
          <div className="ml-3"><Button onClick={() =>{
            router.push('/criar_livro');
          }}>Criar Livro</Button></div>
          <div className="ml-3"><Button onClick={() =>{
            router.push('/criar_campo');
          }}>Criar Campo</Button></div>
      </div>
      <div className="p-10">
        <DataTable columns={columns} data={data || []} />
      </div>
    </>
  )
}
export default HomePage;