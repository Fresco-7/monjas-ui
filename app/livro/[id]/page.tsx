"use client"
import PageError from "@/components/errorPage";
import LivroCard from "@/components/livro";
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";
import { useRouter } from "next/navigation";


export default function LivroPage({ params }: { params: { id: string } }) {
  const { data, isLoading, error} = useSWR<Livro>(`/api/get_livro/${params.id}`, fetcher);  
  const router = useRouter();
  if (error) {
    return <PageError />;
  }
  if (!data) {
    return <div></div>
  }

  return (
    <div className="p-20 flex justify-center">
      <LivroCard livro={data as Livro} />
    </div>
  );
}
