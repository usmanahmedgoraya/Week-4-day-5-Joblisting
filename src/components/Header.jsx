import { RxCross2 } from "react-icons/rx";
import useJobListingStore from "../store/JobListingStore"
import ToggleSwitch from "./ToggleSwitch";
import LogoDesktop from "../assets/images/bg-header-desktop.svg"
import LogoMobile from "../assets/images/bg-header-mobile.svg"

const Header = () => {
    const { removeTag, selectedTags, clearAllFilters } = useJobListingStore((state) => ({
        removeTag: state.removeTag,
        selectedTags: state.selectedTags,
        clearAllFilters: state.clearAllFilters

    }))
    return (
        <div>
            <div className="flex justify-center items-center shadow-sm bg-[#5ea5a3]">
                <img src={LogoDesktop} alt="header-Desktop" className="md:block hidden" />
                <img src={LogoMobile} alt="header-mobile" className="w-full block md:hidden " />
                <ToggleSwitch className="absolute right-3"/>
            </div>
            {
                selectedTags.length === 0 ? "" :
                    <div className="w-full flex justify-center items-center relative bottom-8">
                        <div className="bg-white dark:bg-gray-700 text-white flex justify-between relative px-8 items-center w-[50rem] mx-4 rounded-md shadow-xl h-auto py-6 md:py-3 ">

                            <div className="flex items-center flex-wrap relative gap-y-4 md:gap-y-3 space-x-2">
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