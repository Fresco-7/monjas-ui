'use client';
import { Button } from '@/components/ui/button';
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Livro } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const EditarLivroForm = ( {data} : {data : Livro}) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
 
  async function handleForm() {
    try{
      setIsDisabled(true);
      await axios.post('/api/editar_livro/'+data.id, {nome, dataPub, autores });
      toast.success('Livro Atualizado');
      router.push('/');
    }catch (error){
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          const str = JSON.stringify(axiosError.response.data).replaceAll('"', '');
          toast.error(str);
        }
      }
    }finally{
      setIsDisabled(false);
    }
  }
  
  const [nome, setNome] = useState(data.nome);
  const [autores, setAutores] = useState(data.autor);
  const [dataPub, setDataPub] = useState(data.dataPub);

  return (
    <>
      <Card className='w-1/2 h-relative'>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Editar livro {data.nome}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nome">Nome</Label>
            <Input id="nome" type="text" value={nome} onChange={(e) => {setNome(e.target.value)}}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="autor">Autor/Autores</Label>
            <Input id="autor" type="text" value={autores} onChange={(e) => {setAutores(e.target.value)}}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dataPub">DataPub</Label>
            <Input id="dataPub" type="text" value={dataPub} onChange={(e) => {setDataPub(e.target.value)}}/>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleForm}>Atualizar Livro</Button>
        </CardFooter>
      </Card>
    </>
  )
}

export default EditarLivroForm;