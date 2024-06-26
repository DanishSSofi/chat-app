import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

function Sidebar() {
   
    return (
        <div className="w-[150px] md:w-[300px] bg-slate-800 border-r border-slate-500  p-4 flex flex-col">
            <SearchInput/>
            <div className="divider px-3"></div>
            <Conversations/>
            <LogoutButton/>
        </div>
    )
}

export default Sidebar

