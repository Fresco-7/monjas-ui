import MonjasLivro from "@/components/MonjasLivro";
export default async function MonjaLivro({ params }: { params: { id: string } }) {
    return (
      <>
        <div className="p-10">
          <MonjasLivro id={params.id}/>
        </div>
      </>
    )
}

