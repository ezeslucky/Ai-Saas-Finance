"use client";
import Link from "next/link";


import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
             
              <Image
                         src={"/logo.svg"}
                         alt=" Logo"
                         width={40}
                         height={40}
                         className="h-12 w-auto object-contain"
                       />
              <h2 className="text-lg font-bold">AIvest</h2>
            </Link>

            <h1 className="dark:text-gray-300 mt-4">
              Build by{" "}
              <span className="dark:text-[#039ee4]">
                <Link href="https://x.com/ezeslucky">@ezeslucky</Link>
              </span>
            </h1>
            <div className="mt-2">
            
            </div>
            <p className="text-sm dark:text-gray-400 mt-5">
              © {new Date().getFullYear()} AIvest. All rights reserved.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://github.com/ezeslucky/Ai-Saas-Finance.git" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/ezeslucky" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://x.com/ezeslucky" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/tos" className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            AIvest
          </h1>
        </div>
      
      </div>
    </footer>
  );
}
