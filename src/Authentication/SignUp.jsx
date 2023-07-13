import React from 'react';
import { useForm } from "react-hook-form";
import TopHeadlines from '../Components/TopHeadlines';

function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <TopHeadlines></TopHeadlines>
        </div>
    )
}

export default SignUp