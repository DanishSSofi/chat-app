
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "../Conversation"

function Conversations() {
    const {loading, conversations } = useGetConversations();
    return (
        <div className="py-2  flex flex-col overflow-auto">
            {conversations.map((conversation,idx)=>(
                <Conversation
                    key={conversation._id}
                    conversation = {conversation}
                    lastIdx = {idx  === conversations.length -1}
                    
                />
            ))}
            {loading ? <span className="loading loading-spinner text-center"></span> : null}
            
        </div>
    )
}

export default Conversations
