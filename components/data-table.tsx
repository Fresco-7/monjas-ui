"use client"

import {
  ColumnDef,

  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  RowData,
  selectRowsFn
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "./ui/button"
import { Input } from "@/components/ui/input"

import {   Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, } from "./ui/select"
import { DataTableViewOptions } from "./data-table-view-options"
import { useState } from "react"
import { Campo } from "@prisma/client"
import { Value } from "@radix-ui/react-select"
import axios, { AxiosError } from "axios"
import toast from "react-hot-toast"
import { useQueryClient } from "react-query"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}



export function DataTable<TData, TValue>({columns,data} : DataTableProps<TData, TValue>) {
  const [filtering, setFiltering] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });
 

  return (
    <>
    <div className="relative flex flex-col ">
      <div className="flex p-4 items-center space-x-5 lg:justify-between justify-center" >
          <Input placeholder="Filtro" value={filtering} onChange={(e) => {setFiltering(e.target.value);}}className="max-w-sm sm"/>
          <DataTableViewOptions table={table} />
      </div>
      <div className="block w-full overflow-x-auto border rounded-xl shadow-xl">
        <Table>
        <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {

                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                const data = row.original as tabelaRow
                return (
                  <TableRow
                    key={data.id} data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
        </Table>
      </div>
        <div className="flex items-center lg:justify-between justify-center space-x-2 p-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} de {" "}
            {table.getFilteredRowModel().rows.length} linha(s) selecionadas.
          </div>
          <p className="text-sm font-medium">linhas por pag.</p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={table.getState().pagination.pageSize} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 15, 20, 25].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Pag. {table.getState().pagination.pageIndex + 1} de{" "}
            {table.getPageCount()}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próxima
          </Button>
        </div>
    </div>
    </>
  )
}
