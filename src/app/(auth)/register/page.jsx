"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


const RegisterPage = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { name, email, password } = data
        // console.log(name,email,password);
        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });
        if (error) {
            alert(error.message)
        }
        else if (res) {
            alert("Register successful")
             router.push("/");
        }
    }

    return (
        <div className="container mx-auto bg-slate-100 flex justify-center items-center min-h-[80vh]">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center">Register your account</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input type="name" className="input" placeholder="enter your name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className="text-red-500">This name is required</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="email" className="input" placeholder="enter your email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500">This email is required</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">password</legend>
                        <input type="password" className="input" placeholder="enter your password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className="text-red-500">This password is required</span>}
                    </fieldset>
                    <button className="btn bg-primary text-white  w-full text-xl">Submit</button>
                </form>
                <p>if have an account ? <Link className="text-red-400 text-xl font-semibold" href={"/login"}>login</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;