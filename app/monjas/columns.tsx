"use client"
 
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import toast from "react-hot-toast"
import { Checkbox } from "@/components/ui/checkbox"

export type Campos = {
    
    id: string
    BastardaLegitima :string
    LinhagemFamiliar : string
    NomeReligioso : string
    Idade : string
    DataDeNascimento : string
    TempoDeNoviciado : string
    LocalDeBatismo : string
    Pai : string
    AvoPaterno : string
    AvoPaterna : string
    Mae : string
    AvoMaterno : string
    AvoMaterna : string
    FreirasParentesco : string
    Irmaos : string[]
    Observacoes : string
    ReferenciaId: string 
}

export type Monja = {
    id : string
    nome : string
    campos: Campos[]
}

export const columns: ColumnDef<Monja>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
            className="translate-y-[2px]"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            className="translate-y-[2px]"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
    {
        accessorKey: "nome",
        header: "Nome",
        
    },
    {   
        accessorKey: "campos",
        header: "Bastarda / Legitima",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.BastardaLegitima;
                res += " ";
            });
            return res;
        },
        id : "Bastarda/Legitima"
    },
    {
        accessorKey: "campos",
        header: "Linhagem Familiar",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.LinhagemFamiliar;
                res += " ";
            });
            return res;
        },
        id : "Linhagem Familiar"
    },
    {
        accessorKey: "campos",
        header: "Nome Religioso",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.BastardaLegitima;
                res += " ";
            });
            return res;
        },
        id : "Nome Religioso"

    },
    {
        accessorKey: "campos",
        header: "Idade",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.Idade;
                res += " ";
            });
            return res;
        },
        id : "Idade"

    },
    {
        accessorKey: "campos",
        header: "Data de Nascimento",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.DataDeNascimento;
                res += " ";
            });
            return res;
        },
        id : "Data de Nascimento"

    },
    {
        accessorKey: "campos",
        header: "Local de Batismo / Naturalidade",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.LocalDeBatismo;
                res += " ";
            });
            return res;
        },
        id : "Local de Batismo / Naturalidade"

    },
    {
        accessorKey: "campos",
        header: "Pai",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.Pai;
                res += " ";
            });
            return res;
        },
        id : "Pai"
    },
    {
        accessorKey: "campos",
        header: "Avô Paterno",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.AvoMaterno;
                res += " ";
            });
            return res;
        },
        id : "Avô Paterno"
    },  
    {
        accessorKey: "campos",
        header: "Avó Paterna",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.AvoPaterna;
                res += " ";
            });
            return res;
        },
        id: "Avó Paterna"
    },
    {
        accessorKey: "campos",
        header: "Mae",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.Mae;
                res += " ";
            });
            return res;
        },
        id: "Mae"
    },
    {
        accessorKey: "campos",
        header: "Avô Materno",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.AvoMaterno;
                res += " ";
            });
            return res;
        },
        id: "Avô Materno"

    },  
    {
        accessorKey: "campos",
        header: "Avó Materna",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.AvoMaterna;
                res += " ";
            });
            return res;
        },
        id: "Avó Materna"
    },

    {
        accessorKey: "campos",
        header: "Observações",
        cell: props => {
            const array = props.cell.renderValue() as Campos[]; 
            let res = "";
            const mappedArray = array.map((item, index) => {
                res += item?.Observacoes;
                res += " ";
            });
            return res;
        },
        id: "Observações"
    },

    {
        id: "actions",
        cell: ({ row }) => {
          const monja = row.original
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => {
                    navigator.clipboard.writeText(monja.id);
                    toast.success('Id da Monja copiado');
                }}
                >
                  Copy Monja id
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View Monja</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    },
    
]
