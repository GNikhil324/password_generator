'use client'
import { Button, Card, InputAdornment, TextField } from '@mui/material';
import { useState, useCallback, useEffect, useRef } from 'react';

export default function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [length, setLength] = useState(8);
    const passwordRef = useRef(null)

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!\"#$%&'*+,./:;=?@\\^`|~";
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }

        setPassword(pass);

    }, [numberAllowed, charAllowed, length])

    const copyClipBoard = () => {
        passwordRef.current?.select();
        passwordRef?.current?.setSelectionRange(0, 5)
        navigator.clipboard.writeText(password)
    }

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed])
    return (
        <div>
            <div className='full-width text-center p-10 z-shadow' style={{ width: "600px" }}>
                <h1>Password Generator</h1>
                <div className='mt-10 d-flex'>
                    <TextField size="small"
                        value={password}  inputRef={passwordRef}
                        fullWidth />
                    <Button variant='contained' className='font-bold'
                        size="large"
                        onClick={copyClipBoard}>
                        Copy
                    </Button>

                </div>
                <div className='flex-justify-between mt-20'>
                    <div>
                        <input type="range" min={6} max={100} value={length}
                            className='cursor-poiner'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label>Length:({length})</label>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed((prev) => !prev)
                            }}
                        />
                        <label htmlFor='numberInput'>Number</label>
                    </div>
                    <div>
                        <input type="checkbox" defaultChecked={charAllowed}
                            id="characterInput"
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}
                        />
                        <label htmlFor='characterInput'>Character</label>
                    </div>

                </div>


            </div>

        </div>
    )
}                     