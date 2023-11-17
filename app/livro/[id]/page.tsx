"use client"
import PageError from "@/components/errorPage";
import LivroCard from "@/components/livro";
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";
import { Livro } from "@prisma/client";


export default function LivroPage({ params }: { params: { id: string } }) {
  const { data, error } = useSWR(`/api/get_livro/${params.id}`, fetcher);

  if (error) {
    return <PageError />;
  }

  if (!data) {
    return <div>Loading...</div>; // Add a loading state while fetching data
  }

  return (
    <div className="p-20 flex justify-center">
      <LivroCard livro={data as Livro} />
    </div>
  );
}
