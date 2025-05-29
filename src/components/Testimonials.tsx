import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpeg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              MAK Tech Global transformed <Mark>property management</Mark> with <Mark>automated rent</Mark>, <Mark>real-time maintenance</Mark>, and tailored digital solutions.
            </p>

            <Avatar
              image={userOneImg}
              name="Bilal Safder"
              title="Manager Strategy Sales & Marketing at Lakhani Group"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              MAK Tech Global revolutionized <Mark>real estate management</Mark> through <Mark>automated payment</Mark>, <Mark>instant maintenance updates</Mark>, and customized digital tools.
            </p>

            <Avatar
              image={userTwoImg}
              name="Syed Bilal Jafri"
              title="CEO of Zyck Property"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Working with<Mark> MAK 3PL </Mark>greatly <Mark>benefited</Mark> our <Mark>eCommerce brand.</Mark> Their fast, dependable <Mark>warehousing</Mark> and <Mark>fulfillment</Mark> improved delivery speed by <Mark>35%</Mark>.
            </p>

            <Avatar
              image={userThreeImg}
              name="Rodney Galeano"
              title="CEO at Loki 3PL"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-[#00bcb7] bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-[#45e9e6] dark:bg-[#038A87] dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
