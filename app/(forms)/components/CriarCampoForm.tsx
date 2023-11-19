'use client';
import { Button } from '@/components/ui/button';
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import {Livro, Monja} from '@prisma/client';
import {SelectLivro} from './SelectLivro';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const CriarCampoForm = ({id} : {id : any}) => {
  const router = useRouter();
  const [selectedLivro, setSelectedLivro] = useState('');  
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const { data, isLoading } = useSWR<Livro[]>("/api/get_livros", fetcher);  
  const {data : dataMonja, isLoading : isLoadingMonja} = useSWR<Monja>(`/api/get_monja/${id}`, fetcher);

  const [formData, setFormData] = useState({
    nrFolio: '', 
    datacaoReferencia: '',
    filiacao: '',
    linhagemFamiliar: '',
    nomeReligioso: '',
    idade: '',
    dataNascimento: '',
    tempoNoviciado: '',
    naturalidadeBatismo: '',
    pai: '',
    avoPaterno: '',
    avoPaterna: '',
    mae: '',
    avoMaterno: '',
    avoMaterna: '',
    freirasParentesco: '',
    observacoes: '',
    irmaos: '',
    idLivro : '',
  });

  const handleForm = async () => {
    try{
      setIsDisabled(true);
      const res = await axios.post(`/api/criar_campo/${id}`, {"data" : formData, "idLivro" : selectedLivro} );
      toast.success("Campo criado");
      router.push(`/monja/${id}`);
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
  if(isLoading){
    return (
      <>
      </>
    )
  }
  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
      <CardTitle className="text-2xl">Editar Campo da <Link href={`/monja/${id}`}><span className='text-sky-300 cursor-pointer underline'>Monja</span></Link></CardTitle>
      </CardHeader>
        <CardContent className='grid grid-cols-2 gap-4 mt-2 '>
        <div className="flex flex-col space-y-1.5 justify-center items-left col-span-2 mb-4 items-center">
          <Label className='bold' >Livro</Label>
          {data ? data.length != 0 ? (
          <><div className='flex justify-center'>
              <SelectLivro livros={data} onLivroSelect={setSelectedLivro} livroId={selectedLivro}/>
            </div>
          </>) 
          : (
            <><div className='flex items-center justify-center p-4'>
                <span className='text-primary/80 text-xl sm:text-md'>Nenhum livro, crie um livro <Link href="/criar_livro"><span className='ml-1 text-primary/80 text-xl sm:text-md underline hover:cursor-pointer hover:text-primary'>aqui</span></Link> </span>
              </div>
            </>
          ) 
          :(<><div className='flex items-center justify-center p-4'>
          <span className='text-primary/80 text-xl sm:text-md'>Nenhum livro, crie um livro <Link href="/criar_livro"><span className='ml-1 text-primary/80 text-xl sm:text-md underline hover:cursor-pointer hover:text-primary'>aqui</span></Link> </span>
        </div>
      </>)}
              
       </div>
          <div className="flex flex-col space-y-1.5">
                <Label >Numero Folio</Label>
                <Textarea value={formData.nrFolio} onChange={(e) => setFormData({ ...formData, nrFolio: e.target.value })} />        
          </div>
          <div className="flex flex-col space-y-1.5">
                <Label>Datacao da Referencia</Label>
                <Textarea value={formData.datacaoReferencia} onChange={(e) => setFormData({ ...formData, datacaoReferencia: e.target.value })} />        
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label >Bastarda ou Legitima</Label>
                <Textarea value={formData.filiacao} onChange={(e) => setFormData({ ...formData, filiacao: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Linhagem Familiar</Label>
                <Textarea value={formData.linhagemFamiliar} onChange={(e) => setFormData({ ...formData, linhagemFamiliar: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Nome Religioso</Label>
                <Textarea value={formData.nomeReligioso} onChange={(e) => setFormData({ ...formData, nomeReligioso: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Idade</Label>
                <Textarea value={formData.idade} onChange={(e) => setFormData({ ...formData, idade: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Data De Nascimento</Label>
                <Textarea value={formData.dataNascimento} onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Tempo De Noviciado</Label>
                <Textarea value={formData.tempoNoviciado} onChange={(e) => setFormData({ ...formData, tempoNoviciado: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Local de Batismo / Naturalidade</Label>
                <Textarea value={formData.naturalidadeBatismo} onChange={(e) => setFormData({ ...formData, naturalidadeBatismo: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Pai</Label>
                <Textarea value={formData.pai} onChange={(e) => setFormData({ ...formData, pai: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avô Paterno</Label>
                <Textarea value={formData.avoPaterno} onChange={(e) => setFormData({ ...formData, avoPaterno: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avó Paterna</Label>
                <Textarea value={formData.avoPaterna} onChange={(e) => setFormData({ ...formData, avoPaterna: e.target.value })} />        
            </div>            
            <div className="flex flex-col space-y-1.5">
                <Label >Mae</Label>
                <Textarea value={formData.mae} onChange={(e) => setFormData({ ...formData, mae: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label>Avô Materna</Label>
                <Textarea value={formData.avoMaterno} onChange={(e) => setFormData({ ...formData, avoMaterno: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avó Materna</Label>
                <Textarea value={formData.avoMaterna} onChange={(e) => setFormData({ ...formData, avoMaterna: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Freiras, Parentesco</Label>
                <Textarea value={formData.freirasParentesco} onChange={(e) => setFormData({ ...formData, freirasParentesco: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label>Irmãos</Label>
                <Textarea value={formData.irmaos} onChange={(e) => setFormData({ ...formData, irmaos: e.target.value })} />        
            </div>
            <div className="flex flex-col col-span-2 space-y-1.5">
                <Label>Observações</Label>
                <Textarea value={formData.observacoes} onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })} />        
            </div>
        </CardContent>
      <CardFooter>
        <Button className="w-full" disabled={isDisabled} onClick={handleForm}>Criar Campo</Button>
      </CardFooter>
    </Card>
    </>
  )

}
export default CriarCampoForm;