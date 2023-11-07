
import { Monja, columns } from "@/app/monjas/columns2"
import { DataTable } from "@/components/data-table"
import { Button } from "@/components/ui/button";

import { promises as fs } from 'fs';

async function getData(): Promise<Monja[]> {
  const file = await fs.readFile(process.cwd() + '/app/data2.json', 'utf8');
  const data = JSON.parse(file);
  return data
}

export default async function HomePage() {
  const data = await getData()

   
  return (
  <>
    <div className="flex p-4 justify-center items-center ">
        <Button>Criar Monja</Button>
        <div className="ml-3"><Button>Criar Livro/Referencia</Button></div>
    </div>
    <div className="p-10">
      <DataTable columns={columns} data={data} />
    </div>
    

    </>

  )
}
