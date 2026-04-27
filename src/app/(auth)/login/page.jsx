"use client"

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data
        // console.log(password,email);
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (error) {
            alert(error.message)
        }
        else if (res) {
            alert("Login successful")
        }
    }

    const handleGoogle = async () => {
        const { data, error } = await authClient.signIn.social({
            provider: "google",
        });

        if (error) {
            alert(error.message)
        }
    }
    const handlegithub = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })

    }

    return (
        <div className="container mx-auto bg-slate-100 flex justify-center items-center min-h-[80vh] flex-col gap-4">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center">Login your account</h2>


                <form onSubmit={handleSubmit(onSubmit)}>
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
                <p>Don't have an account ? <Link className="text-red-400 text-xl font-semibold" href={"/register"}>Register</Link></p>
            </div>
            <button className="btn border-fuchsia-500 text-fuchsia-500" onClick={handleGoogle}>Login with google</button>
            <button className="btn border-blue-600 text-blue-600" onClick={handlegithub}>Login with github</button>
        </div>
    );
};

export default LoginPage;