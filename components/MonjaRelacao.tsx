"use client"
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Monja, RelacoesFamiliares } from "@prisma/client";
import { Textarea } from "./ui/textarea";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import PageError from "./errorPage";

const MonjaRelacaoCard = ({relacao, monjaA, monjaB} : {relacao : RelacoesFamiliares, monjaA : Monja, monjaB : Monja}) => { 
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const router = useRouter();



    const handleUpdate = async () => {
        const observacao = relacao.observacao
        try{
          setIsDisabled(true);
          const res = await axios.post(`/api/editar_observacao/${relacao.id}`, {observacao} );
          toast.success("Observações atualizadas");
          router.refresh();
        }catch (error){
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
              const str = JSON.stringify(axiosError.response.data).replaceAll('"', '');
              toast.error(str)
            }
          }
        }finally{
          setIsDisabled(false);
        }
    }
    if(relacao.id){
        return(
            <>
                <Card>
                        <div className="flex justify-end pt-4 pr-4"> 
                            <Link href={`/editar_relacao/${relacao.id}`} className="mr-2"><Button className="w-16" variant={'ghost'} >Editar</Button></Link>
                        </div>
                        <div className="flex justify-center pt-2"> 
                            <span>Relação: {relacao.relacao}</span>
                        </div>
                    <CardHeader>
                        <div className="flex w-full  h-full p-4">
                            <div className="flex w-1/2  justify-center items-center border-r-2 p-4" >
                                <span>Monja : {''}
                                <Link href={`/monja/${monjaA.id}`}>
                                <span className='text-sky-300 cursor-pointer underline'>{monjaA.nome}</span></Link></span>
                            </div>
                                <div className="flex w-1/2  p-4 justify-center items-center">
                                <span>Monja : {''}
                                <Link href={`/monja/${monjaB.id}`}>
                                <span className='text-sky-300 cursor-pointer underline'>{monjaB.nome}</span></Link></span>
                            </div>
                        </div>
                    </CardHeader>
                    <div className="flex justify-center "> 
                        <span>Observações</span>
                    </div>
                    <div className="flex justify-center w-full p-2">
                        <Textarea value={relacao.observacao}/>
                    </div>
                </Card>
            </>
        )
    } else {
        return (
            <>
                <PageError />
            </>
        );
    }
}

export default MonjaRelacaoCard