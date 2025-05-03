'use client'

export type Source = "Client" | "Server";

export default function ChatBubble({ source, text }: { source: Source, text: string }) {
    let classname = ""
    if (source == "Client") {
        classname = 'ClientChatBubble';
    } else {
        classname = 'ServerChatBubble';
    };

    return (
        <p className={classname}>
            source:{source}<br />
            {text}
        </p>
    );
}

