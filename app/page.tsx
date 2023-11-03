
import { Monja, columns } from "@/app/monjas/columns2"
import { DataTable } from "@/components/data-table"

import { promises as fs } from 'fs';

async function getData(): Promise<Monja[]> {
  const file = await fs.readFile(process.cwd() + '/app/data2.json', 'utf8');
  const data = JSON.parse(file);
  return data
}


export default async function DemoPage() {
  const data = await getData()
  return (
<>
      <div className="h-full relative">
        <div className="flex justify-center">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>

  )
}
