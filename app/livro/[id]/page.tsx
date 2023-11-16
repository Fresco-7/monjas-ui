import PageError from "@/components/errorPage";
import LivroCard from "@/components/livro";
import { Livro } from "@prisma/client";

const getData = async (id: string) => {
  const data = await fetch(`http://localhost:3000/api/get_livro/${id}`,{cache : 'no-store'});

  if (data.status === 200) {
    const livro = await data.json();
    return livro as Livro;
  } else {
    throw new Error('Erro ao buscar o livro');
  }
};

export default async function LivroPage({ params }: { params: { id: string } }) {
  try {
    const data = await getData(params.id);

    return (
      <div className="p-20 flex justify-center">
        <LivroCard livro={data}></LivroCard>
      </div>
    );
  } catch (error) {
    return(
      <>
        <PageError />
      </>
    )

  }
}
