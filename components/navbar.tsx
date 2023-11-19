"use client"
import ModeToggle from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {  
  const pathname = usePathname(); 
  return ( 
    <div className="flex items-center bg-background border-b border-muted-foreground/20">
      <div className="flex w-full justify-between p-2">
        <div className="ml-5 flex items-center justify-center flex-grow"> 
        <Link href="/"><span className={pathname === "/" ? "mr-5 hover:cursor-pointer text-primary" : "mr-5 hover:cursor-pointer text-primary/60"}>Monjas</span></Link>
        <Link href="/livros"><span className={pathname === "/livros" ? "hover:cursor-pointer text-primary" : "hover:cursor-pointer text-primary/60"}>Livros</span></Link>
        </div>
        <div className="flex items-center">
            <span><ModeToggle/></span>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;