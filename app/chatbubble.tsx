'use client'

export type Source = "Client" | "Other";

export default function ChatBubble({source, text}: {source: Source, text: string}) {
    return (
        <p className="ChatBubble">
            source:{source}<br/>
            {text}
        </p>
    );
}

