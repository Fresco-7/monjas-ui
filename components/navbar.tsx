import ModeToggle from "@/components/mode-toggle";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Checkbox } from "./ui/checkbox";

const Navbar = () => {  
  
  return ( 
    <div className="flex items-center bg-background border-b border-muted-foreground/20">
      <div className="flex w-full justify-end ">
        <div className="flex items-center ">
            <div className=" w-full border-muted-foreground/20 p-2 pr-5  ">            
                <span className="mr-5"><ModeToggle/></span>
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default Navbar;