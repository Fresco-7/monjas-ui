import React from 'react'
import CriarLivroFrom from '../../components/CriarLivro';
import { useQuery } from 'react-query';
import axios from 'axios';

const CriarLivro = () => {
  return ( 
    <>
        <div className='flex  justify-center h-full w-full '>
          <div className='flex w-full h-full mt-10 justify-center'>
            <CriarLivroFrom />
          </div>
        </div>
    </>
  )
}

export default CriarLivro;