'use client';
import { Button } from '@/components/ui/button';
import {Card,CardContent, CardFooter,CardHeader,CardTitle,} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { Campo, Livro } from '@prisma/client';
import {SelectLivro} from './SelectLivro';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const EditarCampoForm = ({id} : {id : any}) => {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
  const { data, isLoading} = useSWR<Livro[]>("/api/get_livros", fetcher);  
  const { data : Campo, isLoading : isLoadingCampo} = useSWR(`/api/get_campo/${id}`, fetcher); 
  const [selectedLivro, setSelectedLivro] = useState("");
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
    avosPaternos: '',
    mae: '',
    avosMaternos: '',
    freirasParentesco: '',
    observacoes: '',
    irmaos: '',
    idLivro : '',
    monjaId : '',
    pagina  : '',
    nomeSecular : '',
    livroDoLivro : '', 
    qualidadeCargo : '',
  });

  React.useEffect(() => {
    if (Campo) {
      const campo = Campo.campo as Campo;
      const livro = Campo.livro as Livro;
      if(livro){
        setSelectedLivro(livro.id);
      }
      

      const {
        nrFolio, datacaoReferencia, filiacao, linhagemFamiliar, nomeReligioso, idade, dataNascimento,
        tempoNoviciado, naturalidadeBatismo, pai, avosPaternos, mae, avosMaternos, 
        freirasParentesco, observacoes, irmaos, monjaId, pagina, livroDoLivro, nomeSecular, qualidadeCargo
      } = campo;
  
      setFormData(prevFormData => ({
        ...prevFormData,
        nrFolio, datacaoReferencia, filiacao, linhagemFamiliar, nomeReligioso, idade, dataNascimento,
        tempoNoviciado, naturalidadeBatismo, pai, avosPaternos, mae, avosMaternos,
        freirasParentesco, observacoes, irmaos, monjaId, pagina, livroDoLivro, nomeSecular, qualidadeCargo
      }));
    }


  }, [Campo, selectedLivro]);


  const handleForm = async () => {
    try{
      setIsDisabled(true);
      const res = await axios.post(`/api/editar_campo/${id}`, {"data" : formData, "idLivro" : selectedLivro} );
      toast.success("Campo Atualizado");
      router.push(`/monja/${formData.monjaId}`);
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
    if(isLoading || isLoadingCampo){
      return(
        <>
        <div className="flex w-full h-screen justify-center">

        </div>
        </>
      )
    }
   
  return (
    <>
    <Card className='w-1/2 h-relative'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Editar Campo da <Link href={`/monja/${formData.monjaId}`}><span className='text-sky-300 cursor-pointer underline'>Monja</span></Link></CardTitle>
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
                <Label >Livro do Livro</Label>
                <Textarea value={formData.livroDoLivro} onChange={(e) => setFormData({ ...formData, livroDoLivro: e.target.value })} />        
          </div>
          <div className="flex flex-col space-y-1.5">
                <Label >Pagina</Label>
                <Textarea value={formData.pagina} onChange={(e) => setFormData({ ...formData, pagina: e.target.value })} />        
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
                <Label >Qualidade / Cargo</Label>
                <Textarea value={formData.qualidadeCargo} onChange={(e) => setFormData({ ...formData, qualidadeCargo: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Nome secular</Label>
                <Textarea value={formData.nomeSecular} onChange={(e) => setFormData({ ...formData, nomeSecular: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label >Nome Religioso</Label>
                <Textarea value={formData.nomeReligioso} onChange={(e) => setFormData({ ...formData, nomeReligioso: e.target.value })} />        
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
                <Label >Avós Paternos</Label>
                <Textarea value={formData.avosPaternos} onChange={(e) => setFormData({ ...formData, avosPaternos: e.target.value })} />        
            </div>
                 
            <div className="flex flex-col space-y-1.5">
                <Label >Mae</Label>
                <Textarea value={formData.mae} onChange={(e) => setFormData({ ...formData, mae: e.target.value })} />        
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label>Avós Maternos</Label>
                <Textarea value={formData.avosMaternos} onChange={(e) => setFormData({ ...formData, avosMaternos: e.target.value })} />        
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
        <Button className="w-full" disabled={isDisabled} onClick={handleForm}>Atualizar Campo</Button>
      </CardFooter>
    </Card>
    </>
  )

}
export default EditarCampoForm;