'use client'

import { MouseEvent, useState } from 'react';
import ChatBubble, { Source } from './chatbubble';

let nextId = 0;

export default function ChatBox({contents}: {contents: string} ) {
    const [messages, setMessages] = useState<Array<{id: number, text: string, source: Source}>>([]);
    const [message, setMessage] = useState('');

    async function onClickHandler() {
        setMessages(ms => [...ms, {id: nextId++, text: message, source: 'Client' }]);
        let response: string = await queryApi(message);
        setMessages(ms => [...ms, {id: nextId++, text: response, source: 'Server' }]);
    }

    return (
        <div className="h-full">
            <div className="ChatBox">
                {contents}
                
              <div>
                {messages.map(m => (
                  <ChatBubble key={m.id} source={m.source} text={m.text}></ChatBubble>
                ))}
              </div>
            </div>
            <div>
                <input className="my-font-dark" value={message} onChange={e => setMessage(e.target.value)}></input>
                <button className="btn" onClick={onClickHandler}>Send</button>
                <button hidden={true} onClick={() => {
                    setMessages([...messages, {id: nextId++, text: message, source: 'Server' }]);

                }}>Send Server</button>
            </div>
        </div>
    );
};

type ResponseHandler = () => any;

async function queryApi(text: string): Promise<string> {
    const res = await fetch('/api/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
    });

    const json = await res.json();
    return json['answer'];
}

