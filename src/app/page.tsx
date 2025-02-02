"use client"
import Image from 'next/image';
import {BentoBox} from "@/components/BentoBox";
import Marquee from "react-fast-marquee";

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

import userPrefersReducedMotion from "@/hooks/userPrefersReducedMotion";
import Tilt from 'react-parallax-tilt';

import EmojiScene from "@/components/EmojiCanvas";
import {events, EventType} from "@/data/events";


export default function Web() {
  const container = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = userPrefersReducedMotion();
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    // If the user prefers reduced motion, set the opacity to 1
    if (prefersReducedMotion || window.location.hash) {
      gsap.set(
        ".hero_rest, .hero_heading_title",
        {opacity: 1}
      )

      return
    }

    const tl = gsap.timeline({defaults: {ease: "power2.inOut"}})

    tl.fromTo(".hero_heading_title", {scale: 0.5}, {scale: 1, opacity: 1, duration: 1.4})
      .fromTo(".hero_rest", {y: 60}, {y: 0, opacity: 1, duration: 1.5})


  }, {scope: container})

  return (
    <div ref={container} className="mx-10 -mt-24 flex flex-col gap-16 pt-24 lg:pt-0">
      <section className="relative h-screen flex flex-col bg-[var(--primary-background-color)]">
        <div
          className="mx-auto flex h-1/2 max-w-screen-xl items-center justify-center opacity-0 hero_heading_title sm:h-full">
          <div className="flex w-full flex-col lg:w-1/2">
            <h1
              className="mb-6 max-w-5xl text-5xl font-semibold leading-none tracking-tight text-primary text-balance sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Dublin High&apos;s
              <div></div>
              <span className="from-[#DB4A4A] via-[#8FB5E7] to-white bg-clip-text text-transparent bg-gradient-to-r">
                Gael Force Robotics
              </span>
            </h1>
            <p
              className="mb-6 max-w-2xl text-sm font-light text-gray-400 text-balance sm:text-lg md:text-lg lg:mb-8 lg:text-lg xl:text-xl 2xl:text-2xl">
              We are a <span className="font-extrabold">student-run</span> robotics club at Dublin High School that
              competes in the VEX Robotics Competition.
              Our community is diverse, inclusive, and welcoming to all students interested in STEM, exploring who they
              are,
              or just looking to have fun.
            </p>
            {/*<p className="mb-6 max-w-2xl font-light text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">*/}
            {/*  Contact me at <span className="font-bold">somwonglukas@gmail.com</span>*/}
            {/*</p>*/}
          </div>
          <div className="hidden w-1/2 items-center justify-center pl-5 lg:flex">
            <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} className="" tiltAngleXInitial={10} tiltAngleYInitial={-5}>
              <Image className="hidden rounded-lg ring-4 ring-gray-700 2xl:block" src="/gfrworlds2023.jpg"
                     alt="GFR at 2023 worlds" width={550} height={550} priority/>
              <Image className="hidden rounded-lg ring-4 ring-gray-700 xl:block 2xl:hidden" src="/gfrworlds2023.jpg"
                     alt="GFR at 2023 worlds" width={450} height={450} priority/>
              <Image className="rounded-lg ring-4 ring-gray-700 lg:block xl:hidden" src="/gfrworlds2023.jpg"
                     alt="GFR at 2023 worlds" width={350} height={350} priority/>
            </Tilt>
          </div>
        </div>
        <div className="flex items-center justify-center opacity-0 hero_rest">
          <Tilt tiltMaxAngleX={14} tiltMaxAngleY={14} tiltAngleXInitial={10} tiltAngleYInitial={-5}>
            <Image className="block rounded-lg ring-4 ring-gray-700 lg:hidden" src="/gfrworlds2023.jpg"
                   alt="GFR at 2023 worlds" width={600} height={600} priority/>
          </Tilt>
        </div>
        <EmojiScene/>
      </section>
      <section className="flex flex-col gap-16 opacity-0 hero_rest">
        <section className="">
          <div className="mx-auto flex max-w-screen-xl flex-col">
            <h1 id="events"
                className="mb-6 max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
              Events for 2024-2025
            </h1>
            <div className="grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2">
              {events.map((event: EventType, index: number) => (
                <BentoBox
                  key={index}
                  title={event.title}
                  description={event.description}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                  size={event.size}
                  link={event.link ? event.link : undefined}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto flex max-w-screen-xl flex-col">
            <h1 id="about"
                className="mb-10 max-w-2xl scroll-m-24 text-3xl font-semibold leading-none tracking-tight text-primary md:text-4xl xl:text-5xl">
              About Us
            </h1>
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="flex flex-col lg:w-1/2">
                <p className="mb-6 font-light leading-relaxed text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">
                  We are an experienced and <span className="font-extrabold">completely student-run</span> high school
                  club whose members work on both real life
                  engineering projects and participate in the VEX Robotics Competition.
                  Around <span className="font-extrabold">15 years old</span> now, our club takes pride in its members’
                  teamwork and problem solving skills.
                  We also heavily emphasize the engineering design process and ensure that all members have knowledge of
                  such engineering aspects through our yearly seminars.
                </p>
                <p className="mb-6 font-light leading-relaxed text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">
                  Our club is driven by a strong passion for engineering. Due to this, we have always stressed the
                  importance of the <span className="font-extrabold">Engineering Design Process</span> and ensure that
                  each and every one of our members
                  knows about proper design protocol through our Academy program. The <span className="font-extrabold">Gael Force Academy</span> program
                  displays another one of our priorities: sharing knowledge. We make sure that everyone has a place
                  in Gael Force, regardless of experience.
                </p>
                <p className="mb-6 font-light leading-relaxed text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">
                  We think that a good team has more than just a good bot. Our teams stress a <span
                  className="font-extrabold">well-rounded design process</span>.
                  Each of our teams focuses on their <span className="font-extrabold">Documentation</span> just as much
                  as their bot performance.
                  The process of properly documenting work ensures that the team gains a concrete understanding of the
                  multitude of engineering concepts that go into every bot. The documentation is used by new members and
                  the Gael Force Academy as a reference tool to teach and reflect on the design process using live
                  examples
                  from our numerous teams.
                </p>
              </div>
              <div className="flex flex-col lg:w-1/2">
                <p className="mb-6 font-light leading-relaxed text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">
                  Our club has roots that run deep. When we started off, Gael Force Robotics consisted of a single team
                  of robotics
                  enthusiasts. It was a club purely for those with a burning passion for innovation and deep knowledge
                  of engineering.
                  Throughout the years, we’ve managed to expand to a scale that none of the founding members could have
                  imagined.
                  The club is now open to anyone with an interest, we can handle giving them the technical skills
                  needed.
                </p>
                <p className="mb-6 font-light leading-relaxed text-gray-400 text-balance md:text-lg lg:mb-8 lg:text-xl">
                  We take pride in staying connected with our previous members.
                  Many of them stay active in our Discord servers and will pop into meets and competitions whenever they
                  are able to.
                  Their wisdom and input is highly respected and extremely valuable. They are a vital part of our
                  teaching system
                  and many of them end up mentoring other VRC teams after they graduate in order to give back to the
                  community that
                  allowed them to learn so much.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="mx-auto max-w-screen-xl">
            <h1 id="sponsors"
                className="mb-10 max-w-2xl text-xl font-semibold uppercase leading-none tracking-wider text-primary md:text-2xl xl:text-3xl">
              Our Sponsors
            </h1>
            <Marquee pauseOnHover={true} autoFill speed={50} className="mx-auto max-w-screen-xl min-h-36">
              <img src="/robosource.png" alt="robosource Logo" width={200} height={200}
                   className="mr-10 hidden md:block"/>
              <img src="/robosource.png" alt="RoboSource Logo" width={100} height={100}
                   className="mr-10 block md:hidden"/>

              <img src="/LLNL.png" alt="LLNL Logo" width={200} height={200}
                   className="mr-10 hidden md:block"/>
              <img src="/LLNL.png" alt="LLNL Logo" width={100} height={100}
                   className="mr-10 block md:hidden"/>

              <img src="/ACSF.png" alt="ACSF Logo" width={200} height={200}
                   className="mr-10 hidden md:block bg-white"/>
              <img src="/ACSF.png" alt="ACSF Logo" width={100} height={100}
                    className="mr-10 block md:hidden bg-white"/>

              <img src="/Qualcomm.png" alt="Qualcomm Logo" width={200} height={200}
                   className="mr-10 hidden md:block"/>
              <img src="/Qualcomm.png" alt="Qualcomm Logo" width={100} height={100}
                    className="mr-10 block md:hidden"/>

              {/*<img src="/GFRLogo.png" alt="GFR Logo" width={100} height={100} className="mr-10 block md:hidden"/>*/}
            </Marquee>
          </div>
        </section>
      </section>
    </div>
  )
}
