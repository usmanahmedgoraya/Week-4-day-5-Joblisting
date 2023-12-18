import Card from "./Card"
// import Data from "../Data"
import useJobListingStore from "../store/JobListingStore"

export const Cards = () => {
    const {jobsList} = useJobListingStore((state)=>({
        jobsList:state.jobsList
    }))
  return (
    <div className="w-full flex flex-col gap-y-16 md:gap-y-9 items-center justify-center my-4">
        {
            jobsList.map((item)=>{
                return(
                    <Card key={item.id} data={item}/>

                )
            })
        }
    </div>
  )
}
