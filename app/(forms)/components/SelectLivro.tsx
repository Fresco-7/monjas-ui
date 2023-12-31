"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {Command,CommandGroup,CommandItem,} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Livro } from "@prisma/client"
import { useEffect, useState } from "react"

export function SelectLivro({livros, onLivroSelect, livroId} : {livros : Livro[], onLivroSelect: (livroId: string) => void, livroId? : string }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("");
  
  useEffect(() => {
    if(livroId){
      setValue(livroId);
    }  
    
  }, [livroId]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-72 justify-between"
        >
          {value
            ? livros.find((livro) => livro.id === value)?.nome
            : "Escolha um Livro ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-0">
        <Command >
          <CommandGroup >
            {livros.map((livro) => (
              <CommandItem
               
                key={livro.id}
                value={livro.id}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  onLivroSelect(livro.id);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === livro.id ? "opacity-100" : "opacity-0"
                  )}
                />
                {livro.nome}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}






