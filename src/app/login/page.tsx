"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import logo from "../../../public/assets/img/builderx.png";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-200 to-white relative overflow-hidden">
      {/* Decorative background blur circles */}
      <div className="absolute w-[800px] h-[800px] bg-sky-100 rounded-full blur-3xl top-[-300px] left-[-300px] opacity-50"></div>
      <div className="absolute w-[600px] h-[600px] bg-sky-50 rounded-full blur-2xl bottom-[-200px] right-[-200px] opacity-60"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border border-white/30 p-8 w-[90%] max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Image
            src={logo}
            alt="logo"
            height={600}
            width={600}
            className="w-[140px]"
          ></Image>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl font-medium text-gray-800 mb-3 pt-4">
          Sign in your account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Make a new doc to bring your words, data, and teams together. For free
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none placeholder-gray-400 bg-white/70"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-400 focus:outline-none placeholder-gray-400 bg-white/70"
            />
            <Link
              href="/forgot-password"
              className="absolute right-3 top-3 text-sm text-sky-500 hover:underline"
            >
              Forgot password?
            </Link>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5271FF] hover:bg-opacity-90 text-white rounded-lg font-semibold shadow  transition"
          >
            Get Started
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-sm text-gray-400">Or sign in with</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4">
          <button className="flex items-center justify-center w-[100px] h-12 bg-white rounded-lg border hover:bg-gray-50 shadow-sm">
            <FcGoogle className="text-2xl" />
          </button>
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/dashboard",
              })
            }
            className="flex items-center justify-center w-[100px] h-12 bg-white rounded-lg border hover:bg-gray-50 shadow-sm"
          >
            <FaGithub className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
