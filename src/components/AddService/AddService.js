import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://afternoon-ocean-08044.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h1>this is AddService</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" required />
                <input {...register("season")} placeholder="Season" required />
                <input type="number" {...register("price")} placeholder="Price" required />
                <input {...register("picture")} placeholder="Picture url" required />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;