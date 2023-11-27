import SingleMonja  from "@/components/SingleMonja";
export default async function MonjaPage({ params }: { params: { id: string } }) {

    return (
      <>
        <div className=" overflow-x-hidden justify-center">
          <div className="p-10">
            <SingleMonja id={params.id}/>
          </div>
        </div>
      </>
    )
}

