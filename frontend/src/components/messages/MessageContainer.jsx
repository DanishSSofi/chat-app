import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
const MessageContainer = ({toggleSidebar}) => {
	const{selectedConversation,setSelectedConversation}= useConversation();

	useEffect(()=>{
		// clean up -- unmount when logout
		return ()=> setSelectedConversation(null);
	},[setSelectedConversation])
	return (
		<div className='w-[300px] md:min-w-[450px] flex flex-col bg-slate-800'>
			<button onClick={toggleSidebar} className=" fixed absolute top-11 right-2 bg-slate-600 rounded rounded-sm text-xs p-1 z-10" >Menu</button>
			{!selectedConversation ? (<NoChatSelected/>) :
            (<>
            {/* Header */}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>

            <Messages />
            <MessageInput />
        </>)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const {authUser} = useAuthContext();

	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};