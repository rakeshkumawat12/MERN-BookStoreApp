import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Button, FormLabel, TextField, FormControlLabel, Checkbox, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'



export default function BookDetail() {
    const [inputs, setInputs] = useState({})
    const [checked, setChecked] = useState(false);
    const history = useNavigate();

    const id = useParams().id;
    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:3000/books/${id}`)
                .then((res) => res.data).then(data => setInputs(data.book));
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        await axios.put(`http://localhost:3000/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
}

const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>history("/books"))
}

const handleChange = (e) => {
    setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}

console.log(inputs)
return (
    <div>
        {inputs && (
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent="center" alignSelf="center" marginLeft={"auto"} marginRight={"auto"} marginTop={10}>
                    <FormLabel>Name</FormLabel>
                    <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="name" />

                    <FormLabel>Author</FormLabel>
                    <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="author" />

                    <FormLabel>Description</FormLabel>
                    <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="description" />

                    <FormLabel>Price</FormLabel>
                    <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name="price" />

                    <FormLabel>Image</FormLabel>
                    <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name="image" />

                    <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />

                    <Button variant='contained' type="submit">Update Book</Button>
                </Box>
            </form>)}
    </div>

)
}
