import React from "react";
import { Container } from "@/components/Container";
import { Heart } from "lucide-react";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#00bcb7] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white">
                Help Kids in Palestine
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white dark:text-gray-300">
              Lets work together to give children the care and support they need!
            </p>
          </div>
          <a
            href="https://www.pcrf.net/"
            target='_blank'
            className="border-2 border-white text-[#00bcb7] hover:text-white bg-white hover:bg-[#00bcb7] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#00bcb7]  dark:bg-white dark:hover:bg-[#00bcb7] dark:hover:text-white px-14 py-5 rounded-xl text-lg whitespace-nowrap font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Donate Now
          </a>
        </div>
      </div>
    </Container>
  );
};
