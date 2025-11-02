"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

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
          <div className="bg-white p-3 rounded-xl shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-1">
          Sign in with email
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
            className="w-full py-3 bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg font-semibold shadow  transition"
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
            <Image
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
