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
import React from 'react'
import toast from 'react-hot-toast';

const LivroForm = () => {
    const handleForm = () => {
        console.log("handleform");
        toast.success('Livro/Fonte Criada');
    }

  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Cria Fonte/Livro</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="autor">Autor/Autores</Label>
          <Input id="autor" type="text" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dataPub">DataPub</Label>
          <Input id="dataPub" type="text" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleForm}>Criar Fonte/Livro</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default LivroForm;