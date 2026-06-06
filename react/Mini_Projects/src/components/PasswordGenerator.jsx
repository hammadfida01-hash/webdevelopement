import React, { useState, useCallback, useEffect,useRef } from 'react'

function PasswordGenerator() {
    const [length, setLength] = useState(8)
    const [numallowed, setNumallowed] = useState(false)
    const [charallowed, setCharallowed] = useState(false)
    const [password, setPassword] = useState("")

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (numallowed) str += "0123456789"
        if (charallowed) str += "!@#$%^&*()_+"

        for (let i = 0; i < length; i++) {
            
            let char = Math.floor(Math.random() * str.length)
             pass += str.charAt(char)

        }
               setPassword(pass)

    }, [length, numallowed, charallowed])
    
    const passwordref =useRef(null)

    const copiedpassword = useCallback(() => {
            passwordref.current.select()
        window.navigator.clipboard.writeText(password)
    },[password])


    useEffect(() => {
        generatePassword()
    }, [length, numallowed, charallowed, generatePassword])
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('bgimg.jpg')" }}>
        <div className="w-full max-w-4xl mx-auto mt-0 shadow-md rounded-lg px-4 py-6 text-white text-center bg-white/10 backdrop-blur-md border border-white/20">

            <h1 className="text-2xl font-bold mb-4">
                Password Generator
            </h1>

            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    value={password}
                    className="outline-none w-full py-1 px-3 text-black"
                    placeholder="password"
                    readOnly
                    ref={passwordref}
                />

                <button onClick={copiedpassword}
                className="outline-none bg-blue-700 text-white py-2 px-2 hover:bg-blue-800">
                    Copy
                </button>
            </div>

            <div className="flex text-sm gap-x-2 flex-col gap-y-2">

                <div className="flex items-center gap-x-2">
                    <input
                        type="range"
                        min={6}
                        max={50}
                        value={length}
                        className="cursor-pointer"
                        onChange={(e) => setLength(Number(e.target.value))}
                    />
                    <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        checked={numallowed}
                        onChange={() => setNumallowed(prev => !prev)}
                    />
                    <label>Include Numbers</label>
                </div>

                <div className="flex items-center gap-x-2">
                    <input
                        type="checkbox"
                        checked={charallowed}
                        onChange={() => setCharallowed(prev => !prev)}
                    />
                    <label>Include Characters</label>
                </div>

            </div>

        </div>
        </div>
    )
}

export default PasswordGenerator