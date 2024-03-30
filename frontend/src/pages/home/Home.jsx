import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

function Home() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
    return (
        <div className="flex h-[70vh] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            {sidebarVisible && <Sidebar/>}
            <MessageContainer toggleSidebar={toggleSidebar}/>
        </div>
    )
}

export default Home
