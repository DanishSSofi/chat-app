import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";

function useListenMessages() {
    const {socket} = useSocketContext();
    const {messages,setMesssages} = useConversation();

    useEffect(()=>{
        socket?.on("newMessage",(newMessage)=>{
            newMessage.shouldShake = true;
            setMesssages([...messages,newMessage]);
        })
        return ()=> socket?.off("newMessage");      
    }, [socket, setMesssages,messages])
}

export default useListenMessages
