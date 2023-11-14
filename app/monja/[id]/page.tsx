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
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";


const getData = async (id : string) => {
  const data = await fetch(`http://localhost:3000/api/get_campos/${id}`);
  const camposMonja = await data.json();
  if(camposMonja.error){
    return camposMonja
  }
  return camposMonja
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
        <SingleMonja data={data} />
      </div>
    </>
  )
  ;
}

