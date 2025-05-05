"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
      // Hiển thị lỗi nếu cần (ví dụ: thêm state để show thông báo)
    } else {
      router.push("/"); // Chuyển hướng sau khi đăng nhập thành công
    }
  };

  return (
    <div className="my-10 w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-8 max-w-[668px] w-full text-center"
      >
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.svg"
            alt="ITS Singapore"
            width={257}
            height={70}
          />
        </div>
        <h2 className="text-2xl font-normal text-black mb-[50px]">
          Member Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <input
              {...register("username", { required: "User Name is required" })}
              placeholder="User Name"
              className="w-full border text-base border-gray-300 px-4 pt-5 pb-2 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <label className="absolute font-medium left-4 top-1 text-black text-xs transition-all pointer-events-none">
              User Name
            </label>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.username.message === "string" &&
                  errors.username.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              className="w-full border text-base border-gray-300 px-4 pt-5 pb-2 rounded-md text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
            <label className="absolute font-medium left-4 top-1 text-black text-xs transition-all pointer-events-none">
              Password
            </label>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {typeof errors.password.message === "string" &&
                  errors.password.message}
              </p>
            )}
          </div>
          <div className="md:text-left">
            <motion.button
              type="submit"
              className="w-full md:w-[280px] py-3 bg-[#6355D8] text-white font-semibold rounded-full hover:bg-[#4F3BB2] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
