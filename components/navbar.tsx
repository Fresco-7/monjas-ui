"use client"
import ModeToggle from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

const Navbar = () => {  
  
  return ( 
    <div className="flex items-center bg-background border-b border-muted-foreground/20">
      <div className="flex w-full justify-between p-2">
        <div className="ml-5 flex items-center justify-center flex-grow"> 
        <Link href="/"><span className="mr-5 hover:cursor-pointer">Monjas</span></Link>
        <Link href="/livros"><span className="hover:cursor-pointer">Livros</span></Link>
        </div>
        <div className="flex items-center">
            <span><ModeToggle/></span>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;