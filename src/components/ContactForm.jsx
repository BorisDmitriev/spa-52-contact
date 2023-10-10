import React from 'react'
import { useState, useRef, useEffect } from 'react'

export default function ContactForm() {

    const inputNameRef = useRef(null) 

    useEffect(() => {
            inputNameRef.current.focus()
        },[]
    )

    const [formState, setFormState] = useState(
        {
            name: "",
            email: "",
            message: "",
        }
    )

    function handleChange(event) {

        const target = event.target

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    function handleSubmit(event) {

        alert(`Name: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`
        )

        event.preventDefault()
        fetch("https://reqres.in/api/users", {
            method: "POST",
            body: JSON.stringify(formState),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

        setFormState(
            {
                name: "",
                email: "",
                message: "",
            }
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:<br />
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        ref={inputNameRef}
                    />
                </label>
                <br />
                <label>
                    Email:<br />
                    <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Message:<br />
                    <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}
