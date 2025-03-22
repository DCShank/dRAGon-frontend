import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import "./globals.css"
import ChatBox from "./chatbox";

export default function Home() {
    return (
      <ChatBox contents="Hello!"/>
    );
}
