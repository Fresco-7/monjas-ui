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

const MonjaForm = () => {
    const handleForm = () => {
        console.log("handleform");
    }

  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Cria Monja</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" type="text" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleForm}>Continuar</Button>
      </CardFooter>
    </Card>
    </>
  )
}

export default MonjaForm;