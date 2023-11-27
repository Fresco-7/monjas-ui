'use client';
import PageError from '@/components/errorPage';
import {Card,CardContent,CardFooter,CardHeader,CardTitle,} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import fetcher from '@/lib/fetcher';
import { Monja, RelacoesFamiliares } from '@prisma/client';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useSWR from 'swr';
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,} from "@/components/ui/command"
import { Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';


const EditarRelacaoForm = ( {id} : {id : any}) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const { data : relacoes, isLoading : isLoadingRelacoes, error} = useSWR<RelacoesFamiliares>(`/api/get_relacao/${id}`, fetcher);  
  const { data, isLoading, error : isError } = useSWR<Monja[]>("/api/get_all_monjas", fetcher);  


  const [relacao, setRelacao] = useState("");
  const [firstMonjaId, setFirstMonjaId] = useState("");
  const [secondMonjaId, setSecondMonjaId] = useState("");
  const [observacao, setObservacao] = useState('')


  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const [secondOpen, setSecondOpen] = React.useState(false)
  const [secondValue, setSecondValue] = React.useState("")
  
  React.useEffect(() => {
    if (relacoes && data) {
        const FirstMonja = data?.find((monja : Monja) => monja.id === relacoes.firstMonjaId )
        const SecondMonja = data?.find((monja : Monja) => monja.id === relacoes.secondMonjaId )
        setRelacao(relacoes.relacao);
        setFirstMonjaId(relacoes.firstMonjaId);
        setSecondMonjaId(relacoes.secondMonjaId);
        setObservacao(relacoes.observacao);
        setValue(relacoes.firstMonjaId+FirstMonja?.nome);
        setSecondValue(relacoes.secondMonjaId+SecondMonja?.nome)
    }
  }, [relacoes, data]);

  const handleForm = async () => {
    if(firstMonjaId.length === 0){
        toast.error('Selecione a Primeira Monja!');
        return
    }
    if(secondMonjaId.length === 0){
        toast.error('Selecione a Secunda Monja!');
        return
    }
    if(relacao.length === 0){
        toast.error('Digite a Relação!');
        return
    }
    if(firstMonjaId === secondMonjaId){
        toast.error("Uma monja não pode ter relação com ela mesma")
        return
    }
    try{
      setIsDisabled(true);
      await axios.post('/api/editar_relacao/'+ id, {relacao, firstMonjaId, secondMonjaId, observacao});
      toast.success('Relacao Atualizado');
      router.push('/relacoes');
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
  
  if(isLoading || isLoadingRelacoes){
    return (
      <>
      </>
    )
  }

  return (
    <>
    {relacoes?.id ?(
        <Card className='w-full md:w-1/2 h-relative'>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Editar Relação Familiar</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="nome">Primeira Monja</Label>
            {data &&
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between"
                        >
                        {value
                            ? data.find((monja : Monja) => monja.id+monja.nome === value )?.nome 
                            : (
                              <>
                                <span className='md:hidden block'>Monja</span>
                                <span className='md:block hidden'>Selecione uma Monja</span>
                              </>
                            )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
                        
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-full p-0">
                        <Command>
                          <CommandInput placeholder="Pesquise Monja..." />
                          <CommandEmpty>Nenhuma Monja encontrada.</CommandEmpty>
                          <CommandGroup className=' overflow-y-scroll h-60'>
                              {data.map((monja : Monja) => (
                              <CommandItem 
                                  key={monja.id}
                                  value={monja.id+monja.nome}
                                  onSelect={(e) => {

                                    if(e === value){
                                      setValue("")
                                    }else{
                                      setValue(monja.id+monja.nome)
                                    }
                                    setFirstMonjaId(monja.id)
                                    setOpen(false)
                                  }}
                              >
                                  <Check
                                  className={cn(
                                      "mr-2 h-4 w-4",
                                      value === `${monja.id}${monja.nome}` ? "opacity-100" : "opacity-0"
                                  )}
                                  />
                                  {monja.nome}
                              </CommandItem>
                              ))}
                          </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
                }
            </div>
      
          <div className="w-full  justify-start">
              <Label htmlFor="dataPub">Relação</Label>
              <Input type='text'value={relacao} onChange={(e)=>setRelacao(e.target.value)}className="flex w-full" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="autor">Segunda Monja Monja</Label>
            {data &&
                <Popover open={secondOpen} onOpenChange={setSecondOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={secondOpen}
                        className="w-full  justify-between"
                        >
                        {secondValue
                            ? data.find((monja : Monja) => monja.id+monja.nome === secondValue )?.nome 
                            : (
                              <>
                                <span className='md:hidden block'>Monja</span>
                                <span className='md:block hidden'>Selecione uma Monja</span>
                              </>
                            )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
                        
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="flex w-full p-0">
                        <Command>
                          <CommandInput placeholder="Pesquise Monja..." />
                          <CommandEmpty>Nenhuma Monja encontrada.</CommandEmpty>
                          <CommandGroup className=' overflow-y-scroll h-60'>
                              {data.map((monja : Monja) => (
                              <CommandItem 
                                  key={monja.id}
                                  value={monja.id+monja.nome}
                                  onSelect={(e) => {


                                    if(e === value){
                                      setSecondValue("")
                                    }else{
                                      setSecondValue(monja.id+monja.nome)
                                    }
                                    setSecondMonjaId(monja.id)
                                    setSecondOpen(false)
                                  }}
                              >
                                  <Check
                                  className={cn(
                                      "mr-2 h-4 w-4",
                                      secondValue === `${monja.id}${monja.nome}` ? "opacity-100" : "opacity-0"
                                  )}
                                  />
                                  {monja.nome}
                              </CommandItem>
                              ))}
                          </CommandGroup>
                        </Command>
                    </PopoverContent>
                </Popover>
                }
          </div>
          <div className="w-full  justify-start">
              <Label htmlFor="dataPub">Observação</Label>
              <Textarea value={observacao} onChange={(e) => setObservacao(e.target.value)}/>        
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" disabled={isDisabled} onClick={handleForm} >Editar Relação</Button>
        </CardFooter>
      </Card>

      ): (<PageError/>)
      }
    </>
  )
}

export default EditarRelacaoForm;