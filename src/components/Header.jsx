import { RxCross2 } from "react-icons/rx";
import useJobListingStore from "../store/JobListingStore"

const Header = () => {
    const { removeTag, selectedTags,clearAllFilters } = useJobListingStore((state) => ({
        removeTag: state.removeTag,
        selectedTags: state.selectedTags,
        clearAllFilters:state.clearAllFilters

    }))
    return (
        <div>
            <div className="flex justify-center items-center shadow-sm bg-[#5ea5a3]">
                <img src="/images/bg-header-desktop.svg" alt="header-Desktop" className="md:block hidden" />
                <img src="/images/bg-header-mobile.svg" alt="header-mobile" className="w-full block md:hidden " />
            </div>
            {
                selectedTags.length===0?"":
                <div className="w-full flex justify-center items-center relative bottom-8">
                <div className="bg-white flex justify-between px-8 items-center w-[60rem] mx-4 rounded-md shadow-xl h-16">
                    
                    <div className="flex items-center space-x-2">
                        {selectedTags.map((tag, index) => {
                            return (<div className="flex items-center p-1" key={index}>
                                <span className="bg-[#ecf7f2] text-[#87ada6] p-1 px-3 select-none">{tag}</span>
                                <span className="bg-[#68a5ab] text-white p-2 cursor-pointer hover:bg-[#2e3938]" onClick={() => removeTag(tag)}><RxCross2 /></span>
                            </div>)
                        })}
                    </div>
                    <div className="flex items-center space-x-2 b">
                        <span className="cursor-pointer text-[#68A5AB] hover:underline duration-300 transition-all transi" onClick={clearAllFilters}>Clear</span>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Header