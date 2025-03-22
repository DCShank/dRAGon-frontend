import "./globals.css"
import ChatBox from "./chatbox";

export default function Home() {
    return (

        <div className="main">
            <div className="w-1/5"/>
            <div className="w-3/5">
                <div className="h-16"/>
                <div className="h-2/3">
                  <ChatBox contents=""/>
                </div>
                <div className="h-1/6"/>
            </div>
            <div className="w-1/5"/>
        </div>
    );
}
