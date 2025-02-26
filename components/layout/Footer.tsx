"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Subscribed with:", data.email);
  };

  return (
    <footer className="bg-gradient-to-b from-[#26235C] via-[#215389] to-[#1E6A9F] text-white py-14">
      <div className="container mx-auto px-6 lg:px-[112px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left lg:px-3">
          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/councilors" className="hover:text-white">
                  Our Councilors
                </Link>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Membership</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/member-directory" className="hover:text-white">
                  Member Directory
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-white">
                  Join us
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white">
                  Member login
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Events</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/activities" className="hover:text-white">
                  Activities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-4 text-center md:text-right">Contact us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="w-6 h-6 hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-6 h-6 hover:text-blue-400" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="w-6 h-6 hover:text-blue-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <motion.div
          className="mt-14 flex flex-col xl:flex-row items-center justify-between text-center lg:px-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <h4 className="text-2xl font-semibold lg:text-left">
              Subscribe to stay updated on our events
            </h4>
            <p className="mt-2 max-w-lg lg:text-left">
              Be part of our growing community. Sign up for latest updates on
              events and industry news.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex lg:flex-row flex-col gap-5 items-center w-full"
            >
              <div className="relative w-full">
                {/* Icon ở đầu input */}
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />

                {/* Input email */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className={`pl-12 pr-4 py-3 min-w-[366px] rounded-[6px] text-black w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } outline-none`}
                />
              </div>

              {/* Hiển thị lỗi nếu có */}
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}

              {/* Nút Subscribe */}

              <button
                type="submit"
                className="bg-[#6355D8] px-6 py-3 hover:bg-purple-700 text-white font-normal text-lg w-full"
              >
                Subscribe
              </button>
            </form>

            {/* Subscribers */}
            <div className="mt-6 flex items-center justify-between space-x-3">
              <div className="flex -space-x-2">
                <Image
                  src="/images/avatar/user1.png"
                  alt="User 1"
                  width={44}
                  height={44}
                  className="rounded-full h-[44px] w-[44px] bg-[#CFCBF3]"
                />
                <Image
                  src="/images/avatar/user2.png"
                  alt="User 2"
                  width={44}
                  height={44}
                  className="rounded-full h-[44px] w-[44px] bg-[#CEF0E3]"
                />
                <Image
                  src="/images/avatar/user3.png"
                  alt="User 3"
                  width={44}
                  height={44}
                  className="rounded-full h-[44px] w-[44px] bg-[#F9E9BE]"
                />
                <Image
                  src="/images/avatar/user4.png"
                  alt="User 4"
                  width={44}
                  height={44}
                  className="rounded-full h-[44px] w-[44px] bg-[#F5D0F4]"
                />
                <Image
                  src="/images/avatar/user5.png"
                  alt="User 5"
                  width={44}
                  height={44}
                  className="rounded-full h-[44px] w-[44px] bg-[#F3F4F6]"
                />
              </div>
              <span className="text-gray-300 text-base font-bold ml-10">
                +1,400 users
              </span>
            </div>
          </div>
        </motion.div>

        {/* ITS Singapore Information */}
        <motion.div
          className="mt-14 text-center mx-auto flex flex-col lg:flex-row lg:px-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/logoFooter.png"
            alt="ITS Singapore"
            width={420}
            height={115}
            className="mx-auto w-[420px] h-[115px]"
          />
          <p className="mt-6 leading-relaxed text-base font-normal">
            Intelligent Transportation Society (ITS) Singapore was formed in
            August 26, 2001. The aim of this society is to bring together the
            professional interests of those in public and private organizations,
            practitioners, academics and researchers related to ITS, and create
            opportunities for networking and interaction.
          </p>
        </motion.div>

        {/* Footer Links */}
        <div className="mt-14">
          {/* Link chính sách - Đưa lên trên đường kẻ */}
          <div className="flex justify-around text-sm mb-4 max-w-3xl mx-auto lg:pl-[55px]">
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>

          {/* Đường kẻ ngăn cách */}
          <div className="border-t border-gray-500 w-full max-w-4xl mx-auto"></div>

          {/* Bản quyền - Nằm dưới đường kẻ */}
          <p className="text-sm text-center mt-4">
            © 2025 ITS Singapore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
