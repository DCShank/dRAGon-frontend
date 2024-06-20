'use client'

import { ChangeEventHandler, ChangeEvent, useState } from 'react'

export default function Button() {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState("Awaiting response");

    function handleChange(e: ChangeEvent) {
        setQuery((e.currentTarget as HTMLInputElement).value);
    }

    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Input label="Query" value={query} onChange={handleChange} />
            <button onClick={async () => setResponse(await queryApi(query))}> Submit! </button>
            </p>
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Response is: {response}
            </p>
        </div>
    );
}

function Input({ label, value, onChange }: { label: string, value: string, onChange: ChangeEventHandler }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={value}
                onChange={onChange}
                className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'
            />
        </label>
    );
}

//<button>This is a button</button>
//<button onClick{() => setResponse(await queryApi("What weapons are available in Cairn?"))}>This is a button</button>
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

