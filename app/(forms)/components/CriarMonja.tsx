'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { Livro } from '@prisma/client';

const CriarMonja = () => {
  
  const { data, isLoading } = useQuery<Livro[]>({
    queryKey : ["livros"],
    queryFn : () => fetch('/api/get_livros').then((res) => res.json()),
  });


  const [formData, setFormData] = useState<criarMonjaFrom>({
    idLivro: '', 
    referencia: '', 
    datacaoReferencia: '',
    nome: '',
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
  });

  const handleForm = async () => {
    try{
      await axios.post('/api/criar_monja', {"data" : formData} );
      }catch (error){
        if (axios.isAxiosError(error)) {

          const axiosError = error as AxiosError;
          if (axiosError.response) {
            const str = JSON.stringify(axiosError.response.data).replaceAll('"', '');
          }
          toast.error("Tente de novo");
        }
      }
    }

  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Criar Monja</CardTitle>
      </CardHeader>
        <CardContent className='grid grid-cols-2 gap-4 mt-2'>
        <div className="flex flex-col space-y-1.5">
              {data?.map((livro) => (
                <p>{livro.nome}</p>
              ))}
                <Label >Id Livro</Label>
                <Textarea value={formData.idLivro} onChange={(e) => setFormData({ ...formData, idLivro: e.target.value })} />        
          </div>
          <div className="flex flex-col space-y-1.5">
                <Label >Referencia</Label>
                <Textarea value={formData.referencia} onChange={(e) => setFormData({ ...formData, referencia: e.target.value })} />        
          </div>
          <div className="flex flex-col space-y-1.5">
                <Label>Datacao da Referencia</Label>
                <Textarea value={formData.datacaoReferencia} onChange={(e) => setFormData({ ...formData, datacaoReferencia: e.target.value })} />        
            </div>
        <div className="flex flex-col space-y-1.5">
                <Label >Nome </Label>
                <Textarea value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />        
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
            {/* Implementar feature de adicionar irmaos */}
            <div className="flex flex-col col-span-2 space-y-1.5">
                <Label>Observações</Label>
                <Textarea value={formData.observacoes} onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })} />        
            </div>
        </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleForm}>Atualizar monja</Button>
      </CardFooter>
    </Card>
    </>
  )

}
export default CriarMonja;