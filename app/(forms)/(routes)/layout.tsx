export default async function create_monjaLayout({
    children,
}: {
    children: React.ReactNode
}) {
  
    return ( 
    <div className="h-full relative">
        <main className="">
            {children}
        </main>
    </div>
   );
}