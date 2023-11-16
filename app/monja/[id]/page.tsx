import SingleMonja  from "@/components/SingleMonja";
import PageError from "@/components/errorPage";
import {Monja } from "@prisma/client";

const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_campos/${id}`,{cache : 'no-store'});
  if (data.status === 200) {
    const camposMonja = await data.json();
    return camposMonja
  }else{
    throw new Error('Erro ao buscar os Campos');
  }
}

export default async function MonjaPage({ params }: { params: { id: string } }) {
  try{
    const data = await getData(params.id);
    return (
      <>
        <div className="flex p-4 justify-center items-center">
          <span className="font-bold text-5xl">Monja : {data?.monja.nome}</span>
        </div>
        <div className="p-10">
          <SingleMonja data={data} />
        </div>
      </>
    )
  }catch (error) {
    return(
      <>
        <PageError />
      </>
    )
  }
}

