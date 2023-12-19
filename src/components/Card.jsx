/* eslint-disable no-unused-labels */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import useJobListingStore from "../store/JobListingStore"
import img from "../assets/images/photosnap.svg"

const Card = ({ data }) => {
    const { addTag, jobsList } = useJobListingStore((state) => ({
        addTag: state.addTag,
        jobsList: state.jobsList
    }))
    const { id, imgURL, title, company, tags, jobType, postTime, location, Featured } = data

    return (
        <>
            <div className={`md:text-left text-center grid md:grid-cols-9 grid-cols-1 bg-white dark:bg-gray-700 shadow-xl mx-2 p-2  ${Featured && "border-l-4 border-l-cyan-600"} max-w-[60rem]  rounded-md`}>
                <div className="col-span-1 relative bottom-9 md:bottom-0 border-red-900 flex justify-center items-center flex-shrink-0">
                    <img src={imgURL} alt="" />
                </div>
                <div className="col-span-8 flex justify-between flex-col md:flex-row  p-2 items-center">
                    <div>
                        <div className="flex flex-col xs:flex-row items-center space-x-3 xs:space-y-0 space-y-3">
                            <div className="font-bold text-[#64babb]">{company}</div>
                            {Featured &&
                                <div >
                                    <span className="bg-[#68a5ab] text-white px-3 py-1 rounded-full mx-1">New!</span>
                                    <span className="bg-[#68a5ab] text-white px-3 py-1 rounded-full mx-1">Featured</span>
                                </div>
                            }
                        </div>
                        <h1 className="text-xl font-bold my-3 text-[#64babb]">{title}</h1>
                        <div className="text-base flex justify-between  text-gray-500 font-semibold">
                            <span className="">{postTime}</span>
                            <span>.</span>
                            <span>{jobType}</span>
                            <span>.</span>
                            <span>{location}</span>
                        </div>
                    </div>
                    <div className="h-0.5 bg-gray-300 w-full my-6 md:hidden" />
                    <div className="flex flex-wrap justify-around space-x-2">
                        {tags.map((tag, index) => {
                            return (
                                <div className="cursor-pointer duration-300 transition-all hover:bg-[#cbded5] dark:bg-gray-700 dark:hover:bg-gray-600 dark:border dark:border-[#cbded5] rounded-md p-2 bg-[#ecf7f2] text-[#87ada6] my-2" key={index} onClick={() => addTag(tag)} >{tag}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card