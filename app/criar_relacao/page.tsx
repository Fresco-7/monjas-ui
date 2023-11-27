import React from 'react'
import CriarRelacaoForm from '../(forms)/components/CriarRelacaoForm';


const CriarRelacao = async () => {
  return (
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <CriarRelacaoForm />
          </div>
        </div>
    </>
  )
}

export default CriarRelacao;