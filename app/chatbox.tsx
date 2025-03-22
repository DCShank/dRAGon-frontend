'use client'

import { useState } from 'react';
import ChatBubble from './chatbubble';

let nextId = 0;

export default function ChatBox({contents}: {contents: string} ) {
    const [messages, setMessages] = useState<Array<{id: number, text: string}>>([]);
    const [message, setMessage] = useState('');
    return (
        <div className="ChatBox">
            {contents}
            
          <div>
            {messages.map(m => (
              <ChatBubble key={m.id} source="Client" text={m.text}></ChatBubble>
            ))}
          </div>
            <input value={message} onChange={e => setMessage(e.target.value)}></input>
            <button onClick={() => {
                setMessages([...messages, {id: nextId++, text: message}]);

            }}>Send</button>
        </div>
    );
}

