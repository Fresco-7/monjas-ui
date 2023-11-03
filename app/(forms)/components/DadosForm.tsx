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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import toast from 'react-hot-toast';

const DadosForm = () => {
    const handleForm = () => {
        console.log("handleform");
        toast.success('Descricao Atualizada');
    }

  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Descrição   "Nome Da Monja"</CardTitle> // Caixa de Texto ao lado para colocar a monja 
      </CardHeader>
        <CardContent className='grid grid-cols-2 gap-4'>
            <div className="flex flex-col space-y-1.5">
                <Label >BastardaL ou egitima</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Linhagem Familiar</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Nome Religioso</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Idade</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Data De Nascimento</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Tempo De Noviciado</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Local de Batismo / Naturalidade</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Pai</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avõ Paterno</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avó Paterna</Label>
                <Textarea  />        
            </div>            
            <div className="flex flex-col space-y-1.5">
                <Label >Mae</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label>Avô Materna</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Avó Materna</Label>
                <Textarea  />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Freiras, Parentesco</Label>
                <Textarea  />        
            </div>
            {/* Implementar feature de adicionar irmaos */}
            <div className="flex flex-col col-span-2 space-y-1.5">
                <Label>Observações</Label>
                <Textarea  />        
            </div>
        </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleForm}>Atualizar monja</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default DadosForm;