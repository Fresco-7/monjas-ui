import { Campo, Monja } from "@prisma/client";
import { DataTable } from "./data-table";
import { columns } from "@/app/monja-columns";


const SingleMonja = ({ data, monja }: { data: SingleMonjatabelaRow[], monja : Monja }) => {

    return(
        <>
            <div>
                <DataTable columns={columns} data={data}></DataTable>
            </div>
        </>
    )
}
export default SingleMonja;
