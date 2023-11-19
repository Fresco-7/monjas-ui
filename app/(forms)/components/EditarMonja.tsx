'use client';
import PageError from '@/components/errorPage';
import { Button } from '@/components/ui/button';
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import fetcher from '@/lib/fetcher';
import { Monja } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useSWR from 'swr';

const EditarMonja = ({id} : {id : any}) => {
    const router = useRouter();
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
    const { data, isLoading, error} = useSWR<Monja>(`/api/get_monja/${id}`, fetcher);  

    const [nome, setNome] = useState("");

    React.useEffect(() => {
      if (data) {
        setNome(data.nome);
      }
    }, [data]);

    const handleForm = async () => {
      setIsDisabled(true);
      if(nome.length === 0){
        toast.error("Digite um nome");

      }
      try{
        await axios.post('/api/editar_monja/'+id, {nome});
        toast.success('Monja Atualizado');
        router.push(`/monja/${id}`);
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

  if(isLoading){
    return (
      <>
      </>
    )
  }

  return (
    <> 
    {data?.id ?(
        <Card className='w-1/2 h-relative'>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Editar Monja  ({data?.nome})</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome </Label>
              <Input id="nome" type="text" value={nome} onChange={(e) => {setNome(e.target.value)}}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={isDisabled} onClick={handleForm}>Atualizar Monja</Button>
          </CardFooter>
        </Card>
      ): (<PageError/>)
    
    }
    </>
  )
}

export default EditarMonja;