"use client"
import { Livro } from "@prisma/client";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import Link from "next/link";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
import PageError from "./errorPage";

interface LivroCardProps {
    livro: Livro;
}

const LivroCard: React.FC<LivroCardProps> = ({ livro }) => {   
    const router = useRouter();
    const path = usePathname();
      
    if(livro.id){
        return(
            <>
                <Card>
                    <div className="flex justify-end pt-4 pr-4"> 
                        
                        <Link href={`/editar_livro/${livro.id}`} className="mr-2"><Button className="w-16" >Editar</Button></Link>
                        <Link href={`/monjas/${livro.id}`} className="mr-2"><Button className="w-16" >Monjas</Button></Link>
                    </div>
                <CardHeader>
                    <CardTitle className="text-4xl flex justify-center">Nome : {livro.nome}</CardTitle>
                    <CardTitle className="text-4xl flex justify-center">Autore(s) : {livro.autor}</CardTitle>
                    <CardTitle className="text-4xl flex justify-center">DataPub : {livro.dataPub}</CardTitle>
                    </CardHeader>
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

export default LivroCard;