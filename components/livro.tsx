"use client"
import { Livro } from "@prisma/client";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction, AlertDialogHeader, AlertDialogFooter } from "./ui/alert-dialog";
import Link from "next/link";

const LivroCard = ({livro} : {livro : Livro}) => {
    return(
            <>
                <Card>
                    <div className="flex justify-end pt-4 pr-4"> 
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button className="w-16 mr-2" onClick={() => {
                                console.log("Apagar Livro");
                                }}>Apagar</Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                <AlertDialogTitle>Deseja mesmo apagar o Livro?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Esta ação não pode ser revertida.
                                </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction className="bg-red-600 text-white hover:bg-red-400">Apagar</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Link href={`/editar_livro/${livro.id}`}><Button className="w-16" >Editar</Button></Link>
                    </div>
                <CardHeader>
                    <CardTitle className="text-4xl flex justify-center">Nome : {livro.nome}</CardTitle>
                    <CardTitle className="text-4xl flex justify-center">Autore(s) : {livro.autor}</CardTitle>
                    <CardTitle className="text-4xl flex justify-center">DataPub : {livro.dataPub}</CardTitle>
                    </CardHeader>
                </Card>
            </>
    )
}

export default LivroCard;