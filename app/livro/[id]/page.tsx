"use client"


const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_livro/${id}`);
  const livro = await data.json();
  if(livro.error){
    return livro
  }
  return livro
}

export default async function Monja({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  console.log(data);

  return (
    <>
      <div className="flex p-4 justify-center items-center">
        <span className="font-bold text-5xl">{data?.monja.nome}</span>
      </div>
      <div className="p-10">
        
      </div>
    </>
  )
  ;
}

