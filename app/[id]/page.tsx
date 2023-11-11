
"use client"
import SingleMonja  from "@/components/SingleMonja";
import { Button } from "@/components/ui/button";
import { Campo, Monja } from "@prisma/client";
import { Heading } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation";

export default function BlogPost({ params }: { params: { id: string } }) {
  console.log(params);

  const monja : Monja =  {
    id: "AA",
    nome: "Monja 1",
    camposIds: []
  }
  
  const data : SingleMonjatabelaRow[] = 
  [
    {
      livro : "Livro 1",
      nrFolio : "1",
      id: "1",
      filiacao: "",
      linhagemFamiliar: "",
      nomeReligioso: "",
      idade: "",
      dataNascimento: "",
      tempoDeNoviciado: "",
      naturalidadeBatismo: "",
      pai: "",
      avoPaterno: "",
      avoPaterna: "",
      mae: "",
      avoMaterno: "",
      avoMaterna: "",
      freirasParentesco: "",
      irmaos: "",
      observacoes: " Campo 1 ",
    },
    {
      livro : "Livro 2",
      nrFolio : "2",
      id: "2",
      filiacao: "",
      linhagemFamiliar: "",
      nomeReligioso: "",
      idade: "",
      dataNascimento: "",
      tempoDeNoviciado: "",
      naturalidadeBatismo: "",
      pai: "",
      avoPaterno: "",
      avoPaterna: "",
      mae: "",
      avoMaterno: "",
      avoMaterna: "",
      freirasParentesco: "",
      irmaos: "",
      observacoes: "Campo 2",
    },
  ]

  const router = useRouter();

  return (
    <>
      <div className="flex p-4 justify-center items-center">
        <span className="font-bold text-5xl">{monja.nome}</span>
      </div>
      <div className="p-4 flex justify-center items-center">
        <AlertDialog >
          <AlertDialogTrigger asChild>
            <Button onClick={() => {
              console.log("Apagar Monja");
            }}>Apagar Monja</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseja mesmo apagar a monja?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser revertida.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction className="bg-red-600 hover:bg-red-400">Apagar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="ml-3">
          <Button onClick={() => {
            router.push('/editar_monja/'+ monja.id)
          }}>Editar Monja</Button>  
        </div>
      </div>
      <div className="p-10">
        <SingleMonja monja={monja} data={data} />
      </div>
    </>
  )
  ;
}
