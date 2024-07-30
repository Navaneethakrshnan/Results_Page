import React, { useState } from "react";
import Image from "../assets/salem_marathon_2024.jpg";
import BackgroundImage from "../assets/bg_badge.png";
import LogoImage from "../assets/nova_logo.png";
import CircleImage from "../assets/Removal-162.png";
import "./SingleResult.css";
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import MainMenu2 from "./MainMenu2";

const SingleResult = () => {
  return (
    <div className="bg-[#fffafa] w-full min-h-screen overflow-hidden">
      <MainMenu2 />
      <MobileMenu />
      {/* banner and name div start */}
      <section className="text-gray-600 lg:mt-20 body-font 2xl:mr-32">
        <div className="container mx-auto flex px-5 2xl:ml-32 xl:ml-24 lg:ml-10 md:ml-9 sm:ml-3 ml-2 pt-10 sm:pt-10 md:pt-10 lg:pt-10 xl:pt-14 2xl:pt-10 md:flex-row flex-col items-center">
          <div
            className="lg:max-w-lg md:w-64 lg:w-96 xl:w-full w-11/12 mb-10 md:mb-0 z-20"
            style={{ marginLeft: "-15px" }}
          >
            <img
              className="object-cover object-center"
              style={{ borderRadius: "10px 0px 0px 10px" }}
              alt="hero"
              src={Image}
            />
          </div>
          <div className="lg:flex-grow md:w-[27rem] w-11/12 sm:w-[34.4rem] -ml-3 sm:-ml-3 xl:w-1/2 2xl:w-[10rem] 2xl:pl-6 xl:pl-16 lg:pl-6 md:pl-4 sm:pl-4 flex flex-col xl:h-96 md:h-48 lg:h-72 md:items-start sm:items-start sm:text-left md:text-left text-left 2xl:mr-24 xl:mr-36 lg:mr-20 items-center border-2 border-gray-200 bg-white rounded-md  sm:-mt-14 md:mt-0 -mt-12 z-0">
            <h1
              className="title-font sm: text-2xl md:text-xl lg:text-3xl mb-2 xl:pt-32 lg:pt-20 md:pt-10 sm:pt-8 pt-6 text-left  text-gray-900 font-extrabold"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                letterSpacing: "0px",
                color: "#292662",
              }}
            >
              SALEM MARATHON 2024
            </h1>
            <p
              className="mb-4 leading-relaxed sm:text-left text-center"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              July 14, 2024
            </p>
            <p className="mb-8 leading-relaxed font-medium text-black sm:text-left text-center">
              Race Category - 10KM
            </p>
          </div>
        </div>
      </section>
      {/* banner and name div end */}
      {/* note div start */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 2xl:ml-28 xl:ml-20 lg:ml-8 md:ml-5 sm:ml-14 ml-9 flex flex-wrap items-center">
          <div className="lg:w-full md:w-screen lg:pr-28 md:pr-16 sm:pr-32 pr-14">
            <h1
              className="title-font font-extrabold text-left text-lg text-gray-900"
              style={{
                fontFamily: "Nunito Sans, sans-serif",
                letterSpacing: "0px",
                color: "#292662",
              }}
            >
              Note
            </h1>
            <h1
              className="title-font font-bold text-left text-2xl text-gray-900"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Results Are Provisional Until Verified
            </h1>
            <p className="leading-loose mt-2 text-left text-sm md:text-base lg:text-base font-normal text-gray-900 xl:pr-0 2xl:pr-20">
              Where the bib tag data of any runner is not reflected on any of
              the timing points at start/finish or on the course, or where the
              runner starts the race before the scheduled start time or beyond
              the permissible time limit, timings of such runners will not
              appear.
            </p>
          </div>
        </div>
      </section>
      {/* note div end */}
      {/* ---------------------- */}
      <div className="flex flex-wrap h-screen mb-[50rem] sm:mb-[60rem] md:mb-[30rem] lg:mb-[15rem] xl:mb-[6rem] 2xl:mb-[6rem]">
        <div className=" h-[45rem] 2xl:ml-24 xl:ml-36 lg:ml-28 md:ml-28 sm:ml-24 ml-9">
          <div className="2xl:ml-6 md:ml-8 lg:-ml-14 w-[21.5rem] sm:w-[45rem] md:w-[30rem] lg:w-[12rem] xl:w-[16rem] 2xl:w-[30rem]">
            <div className="flex flex-wrap lg:-mt-0 md:mt-2 py-10 px-10 relative mb-4 md:-mr-32">
              <img
                alt="banner"
                className="object-cover h-max object-center block absolute inset-0 z-0"
                src={BackgroundImage}
                style={{ height: "45rem" }}
              />
              <div className="text-center relative z-10">
                <div className="flex justify-center items-center lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <img
                    className="align-center align-middle"
                    src={LogoImage}
                    style={{ height: "45px" }}
                  />
                </div>
                <div className="flex mt-8 mb-24 justify-center items-center relative lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  {/* <img
                    className="align-center align-middle"
                    src={CircleImage}
                    style={{ height: "320px" }}
                  /> */}
                  <div className="w-32 h-32 bg-[#292662] rounded-full align-middle "></div>
                  <p className="absolute text-4xl lg:-mt-0 font-bold text-white title-font">
                    NK
                  </p>
                </div>

                <div className="-mt-16 lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <p
                    className="2xl:text-4xl xl:text-xl text-2xl font-extrabold uppercase text-neutral-200 title-font mb-2 "
                    style={{ fontFamily: "Teko, sans-serif" }}
                  >
                    Navaneetha Krishnan
                  </p>
                  <p
                    className="2xl:text-3xl xl:text-xl  text-2xl font-semibold uppercase text-neutral-200 title-font mb-2"
                    style={{ fontFamily: "Kanit, sans-serif" }}
                  >
                    BIB : 1118
                  </p>
                </div>
                <div className="mt-10 lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <p
                    className="2xl:text-3xl xl:text-3xl lg:text-2xl text-2xl font-bold uppercase text-neutral-200 title-font mb-0"
                    style={{ fontFamily: "Reddit Mono, monospace" }}
                  >
                    SALEM MARATHON 2024
                  </p>
                  <p
                    className="2xl:text-2xl xl:text-2xl lg:text-lg text-2xl pt-2 font-mornal uppercase text-neutral-200 title-font mb-2"
                    style={{ fontFamily: "Josefin Sans, sans-serif" }}
                  >
                    5km, 10km, 21km
                  </p>
                  <p className="2xl:text-xl xl:text-xl lg:text-lg text-xl font-semibold uppercase text-neutral-200 title-font mb-2">
                    july 14, 2024
                  </p>
                </div>
                <div className="mt-10 ">
                  <div className="flex-grow text-center text-sm flex justify-between">
                    <div className="2xl:-ml-3 xl:-ml-4 lg:-ml-7 md:-ml-3 sm:ml-2 -ml-3">
                      <p
                        className="leading-relaxed font-bold uppercase text-neutral-200 2xl:text-xl xl:text-sm lg:text-base md:text-xl sm:text-xl text-sm mt-4"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-1px",
                        }}
                      >
                        distance{" "}
                      </p>
                      <p
                        className="mt-4 inline-flex items-center leading-relaxed 2xl:text-2xl xl:text-lg lg:text-base md:text-lg sm:text-xl text-lg font-bold uppercase text-neutral-200"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-2px",
                        }}
                      >
                        10.0 KM
                      </p>
                      <svg
                        width="130"
                        height="140"
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mt-24 xl:w-24 2xl:w-32 sm:w-32 lg:w-24 w-24"
                      >
                        <mask
                          id="mask0_217_2"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="101"
                          height="101"
                        >
                          <circle
                            cx="53.744"
                            cy="53.744"
                            r="49.5"
                            transform="rotate(-85.531 53.744 53.744)"
                            stroke="#E31E25"
                            strokeWidth="1"
                          ></circle>
                        </mask>
                        <g mask="url(#mask0_217_2)">
                          <path
                            d="M65.2271 16.1072C103.081 22.4224 128.587 58.6709 122.178 97.0828C115.77 135.495 79.8784 161.5 42.0245 155.185C4.17053 148.87 -21.3351 112.621 -14.9267 74.2093C-8.5184 35.7974 27.3732 9.79191 65.2271 16.1072Z"
                            fill="#E31E25"
                            stroke="#E31E25"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <div className="2xl:pl-5 xl:pl-3 lg:pl-1 md:pl-4">
                      <p
                        className="leading-relaxed font-bold uppercase text-neutral-200 2xl:text-xl xl:text-sm lg:text-base md:text-xl sm:text-xl text-sm mt-4"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-1px",
                        }}
                      >
                        Time{" "}
                      </p>
                      <p
                        className="mt-4 inline-flex items-center leading-relaxed 2xl:text-2xl xl:text-lg lg:text-base md:text-lg sm:text-xl text-lg font-bold uppercase text-neutral-200"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-2px",
                        }}
                      >
                        42:06
                      </p>
                      <svg
                        width="130"
                        height="140"
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mt-24 xl:w-24 2xl:w-32 lg:w-24 sm:w-32 w-24"
                      >
                        <mask
                          id="mask0_217_2"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="101"
                          height="101"
                        >
                          <circle
                            cx="53.744"
                            cy="53.744"
                            r="49.5"
                            transform="rotate(-85.531 53.744 53.744)"
                            stroke="#E31E25"
                            strokeWidth="1"
                          ></circle>
                        </mask>
                        <g mask="url(#mask0_217_2)">
                          <path
                            d="M65.2271 16.1072C103.081 22.4224 128.587 58.6709 122.178 97.0828C115.77 135.495 79.8784 161.5 42.0245 155.185C4.17053 148.87 -21.3351 112.621 -14.9267 74.2093C-8.5184 35.7974 27.3732 9.79191 65.2271 16.1072Z"
                            fill="#E31E25"
                            stroke="#E31E25"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="2xl:pl-5 xl:pl-3 lg:pl-1 md:pl-4">
                      <p
                        className="leading-relaxed font-bold uppercase text-neutral-200 2xl:text-xl xl:text-sm lg:text-base md:text-xl sm:text-xl text-base mt-4"
                        style={{ fontFamily: "Roboto, sans-serif" }}
                      >
                        pace{" "}
                      </p>
                      <p
                        className="pt-4 inline-flex items-center leading-relaxed 2xl:text-2xl xl:text-lg lg:text-base md:text-lg sm:text-xl text-lg font-bold uppercase text-neutral-200"
                        style={{
                          fontFamily: "Roboto, sans-serif",
                          letterSpacing: "-2px",
                        }}
                      >
                        10:10/KM
                      </p>
                      <svg
                        width="130"
                        height="140"
                        viewBox="0 0 108 108"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="-mt-24 xl:w-24 2xl:w-32 lg:w-24 w-24 sm:w-32"
                      >
                        <mask
                          id="mask0_217_2"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="3"
                          y="3"
                          width="101"
                          height="101"
                        >
                          <circle
                            cx="53.744"
                            cy="53.744"
                            r="49.5"
                            transform="rotate(-85.531 53.744 53.744)"
                            stroke="#E31E25"
                            strokeWidth="1"
                          ></circle>
                        </mask>
                        <g mask="url(#mask0_217_2)">
                          <path
                            d="M65.2271 16.1072C103.081 22.4224 128.587 58.6709 122.178 97.0828C115.77 135.495 79.8784 161.5 42.0245 155.185C4.17053 148.87 -21.3351 112.621 -14.9267 74.2093C-8.5184 35.7974 27.3732 9.79191 65.2271 16.1072Z"
                            fill="#E31E25"
                            stroke="#E31E25"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 md:ml-0 mt-12 sm:mt-10 md:mt-16 lg:-mt-8 xl:-mt-4 sm:-ml-48 lg:ml-32 xl:ml-32 2xl:ml-4">
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:animate-bounce lg:mt-16 xl:mt-10 2xl:mt-4"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-black px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:animate-bounce hover:duration-700 lg:mt-16 xl:mt-10 2xl:mt-4"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </span>
              </button>
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                class="mb-2 inline-block rounded bg-[#25d366] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:animate-bounce lg:mt-16 xl:mt-10 2xl:mt-4"
              >
                <span class="[&>svg]:h-4 [&>svg]:w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 sm:mt-24 md:mt-32 lg:mt-0 md:w-2/3 flex flex-col md:flex-row flex-wrap ml-6 2xl:-mr-24 xl:-mr-32 lg:-mr-10 xl:ml-36 2xl:ml-0 lg:ml-32 md:ml-8 sm:ml-16">
          <div className="w-full md:w-1/2 p-2">
            <div className="2xl:w-[25rem] xl:w-[24rem] lg:w-[20rem] md:w-[23rem] sm:w-[32rem] w-[22rem] bg-[#292662] h-14 rounded-lg pt-1 pl-4 flex items-center">
              <span className="flex items-center">
                {/* <FontAwesomeIcon icon={byPrefixAndName.fas["house"]} />{" "} */}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="gold"
                    stroke-width="5"
                    fill="goldenrod"
                  />
                  <polygon
                    points="50,15 58,40 85,40 60,55 70,85 50,65 30,85 40,55 15,40 42,40"
                    fill="white"
                  />
                  <text
                    x="50"
                    y="50"
                    text-anchor="middle"
                    dy=".3em"
                    font-size="20"
                    font-family="Arial"
                    fill="black"
                  >
                    1
                  </text>
                </svg>
              </span>
              <span
                className="ml-3 mt-1 text-white font-semibold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Ranking
              </span>
            </div>
            <div className="bg-white 2xl:w-[25rem] xl:w-[24rem] lg:w-[20rem] md:w-[23rem] sm:w-[32rem] w-[22rem] h-32 pt-3 px-1 shadow-md rounded-lg">
              <div className="flex-grow text-left flex px-1 sm:px-6 md:px-2 text-sm lg:px-1 xl:px-2 justify-between">
                <div>
                  <p
                    className="leading-relaxed pt-3 text-black font-semibold text-center xl:text-md lg:text-sm"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Overall
                  </p>
                  <a
                    className="xl:mt-6 lg:mt-5 md:mt-6 sm:mt-6 mt-6 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-base"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                        style={{
                          backgroundColor: "#292662",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <h2 className="text-white text-xl font-bold">1</h2>
                      </div>
                      <div>
                        <p
                          className="text-gray-900 text-bold 2xl:ml-0 xl:-ml-2 lg:-ml-2 text-start title-font font-xl block 2xl:text-base xl:text-sm lg:text-xs"
                          style={{
                            marginTop: "2px",
                            fontFamily: "Nunito Sans, sans-serif",
                          }}
                        >
                          OF 115
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <p
                    className="leading-relaxed text-black font-semibold xl:text-md lg:text-sm text-center"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    AgeGroup
                    <br /> (41 TO 59YRS)
                  </p>
                  <a
                    className="mt-3 text-neutral-800 font-semibold inline-flex items-center text-center leading-relaxed text-base"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                        style={{
                          backgroundColor: "#292662",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <h2 className="text-white text-xl font-bold">1</h2>
                      </div>
                      <div>
                        <p
                          className="text-gray-900 text-bold text-start title-font font-xl block lg:-ml-2 2xl:ml-0 xl:-ml-2 2xl:text-base xl:text-sm lg:text-xs"
                          style={{
                            marginTop: "2px",
                            fontFamily: "Nunito Sans, sans-serif",
                          }}
                        >
                          OF 115
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <p
                    className="leading-relaxed text-black font-semibold xl:text-md lg:text-sm text-center"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Pace
                    <br />
                    (Min/KM)
                  </p>
                  <a
                    className="mt-3 text-neutral-800 font-semibold inline-flex items-center leading-relaxed text-sm"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <div className="flex items-center mb-3">
                      <div
                        className="mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                        style={{
                          backgroundColor: "#292662",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <h2 className="text-white text-xl font-bold">1</h2>
                      </div>
                      <div>
                        <p
                          className="text-gray-900 text-bold text-start title-font 2xl:text-base xl:text-sm lg:text-xs block 2xl:ml-0 xl:-ml-2"
                          style={{
                            marginTop: "2px",
                            fontFamily: "Nunito Sans, sans-serif",
                          }}
                        >
                          OF 115
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="2xl:w-96 xl:w-80 lg:w-72 md:w-1/2 p-2">
            <div className="2xl:w-[24.5rem] xl:w-[19rem] lg:w-[16rem] md:w-[18rem] sm:w-[32rem] w-[22rem] bg-[#292662] h-14 rounded-lg pt-1 pl-4 flex items-center 2xl:-ml-16 xl:-ml-3 lg:ml-0 md:ml-36">
              <span className="flex items-center">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="white"
                    stroke-width="5"
                    fill="none"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="25"
                    stroke="white"
                    stroke-width="5"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="75"
                    y2="50"
                    stroke="white"
                    stroke-width="3"
                  />
                  <circle cx="50" cy="50" r="2" fill="white" />
                </svg>
              </span>
              <span
                className="ml-3 mt-1 text-white font-semibold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Timing
              </span>
            </div>
            <div className="2xl:w-[24.5rem] xl:w-[19rem] lg:w-[16rem] md:w-[18rem] sm:w-[32rem] w-[22rem] bg-white h-32 pt-3 px-2 rounded-lg shadow-md 2xl:-ml-16 xl:-ml-3 lg:ml-0 md:ml-36">
              <div className="flex-grow text-center text-sm flex px-6 sm:px-6 md:px-3 lg:px-2 xl:px-3 2xl:px-2 justify-between">
                <div>
                  <p
                    className="leading-relaxed text-black font-semibold xl:text-sm mt-3"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Finish Time
                  </p>
                  <p
                    className="mt-7 text-neutral-800 font-extrabold inline-flex items-center leading-relaxed text-2xl sm:text-xl lg:text-base xl:text-xl 2xl:text-2xl"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    42:06
                  </p>
                </div>
                <div>
                  <p
                    className="leading-relaxed mt-1 text-black font-semibold text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Pace
                    <br /> (Min/KM)
                  </p>
                  <p
                    className="mt-3 text-neutral-800 font-extrabold inline-flex items-center lg:text-base text-2xl sm:text-xl  xl:text-xl 2xl:text-2xl leading-relaxed"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    04:12
                  </p>
                </div>
                <div>
                  <p
                    className="leading-relaxed text-black font-semibold text-md"
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    Speed <br /> (KM/HR)
                  </p>
                  <p
                    className="mt-4 text-neutral-800 font-extrabold inline-flex sm:text-xl text-2xl lg:text-base xl:text-xl 2xl:text-2xl items-center leading-relaxed"
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    14.2
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:mt-[-6rem] xl:mt-[-8rem] 2xl:mt-[-8rem] xl:w-80 p-2">
            <div className="xl:w-[46rem] 2xl:w-[52rem] lg:w-[38rem] md:w-[43.5rem] sm:w-[32rem] w-[22rem] bg-[#292662] h-14 rounded-lg pl-4 flex items-center">
              <span className="flex items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="white"
                    stroke-width="5"
                    fill="none"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="50"
                    y2="20"
                    stroke="white"
                    stroke-width="5"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="80"
                    y2="50"
                    stroke="white"
                    stroke-width="3"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="70"
                    y2="30"
                    stroke="white"
                    stroke-width="2"
                  />
                  <line
                    x1="50"
                    y1="50"
                    x2="30"
                    y2="70"
                    stroke="white"
                    stroke-width="2"
                  />
                  <circle cx="50" cy="50" r="2" fill="white" />
                </svg>
              </span>
              <span
                className="ml-3 mt-0 text-white font-semibold"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                Splits
              </span>
            </div>
            <div className="lg:w-[38rem] xl:w-[46rem] 2xl:w-[52rem] md:w-[43.5rem] sm:w-[32rem] w-[22rem] h-auto border rounded-lg shadow-md overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right rounded-lg">
                <thead className="text-xs uppercase rounded-t-lg bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-black border-gray-300 border-x border-b border-s-1"
                    >
                      Interval
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-black border-gray-300 border-x border-b border-s-1"
                    >
                      Time of Day
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-black border-gray-300 border-x border-b border-s-1"
                    >
                      Chip Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-black border-gray-300 border-x border-b border-s-1"
                    >
                      Pace(Min/KM)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td
                      scope="row"
                      className="px-6 py-4 text-center text-base whitespace-nowrap text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Start
                    </td>
                    <td
                      className="px-6 py-4 text-center text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      05:42:36
                    </td>
                    <td
                      className="px-6 py-4 text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    ></td>
                    <td
                      className="px-6 py-4 text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    ></td>
                  </tr>
                  <tr className="bg-white">
                    <td
                      scope="row"
                      className="px-6 py-4 text-center text-base whitespace-nowrap font-medium text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      SPLIT1@2.5 Km
                    </td>
                    <td
                      className="px-6 py-4 text-center text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      05:52:11
                    </td>
                    <td
                      className="px-6 py-4 text-center text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      09:35
                    </td>
                    <td
                      className="px-6 py-4 text-center text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      03:49
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td
                      scope="row"
                      className="px-6 py-4 text-center font-sm whitespace-nowrap text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      SPLIT2@5 Km
                    </td>
                    <td
                      className="px-6 py-4 text-center text-black text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      06:02:25
                    </td>
                    <td
                      className="px-6 py-4 text-center text-black text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      19:49
                    </td>
                    <td
                      className="px-6 py-4 text-black text-center text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      03:57
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td
                      scope="row"
                      className="px-6 py-4 text-center tex-sm whitespace-nowrap text-base text-black"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      SPLIT3@7.5 Km
                    </td>
                    <td
                      className="px-6 py-4 text-center text-black text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      06:13:31
                    </td>
                    <td
                      className="px-6 py-4 text-center text-black text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      30:55
                    </td>
                    <td
                      className="px-6 py-4 text-center text-black text-base"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      04:07
                    </td>
                  </tr>
                  <tr className="bg-white d">
                    <th
                      scope="row"
                      className="px-6 py-4 text-center font-bold whitespace-nowrap text-black"
                    >
                      Finish
                    </th>
                    <td className="px-6 py-4 text-center font-bold text-black">
                      06:13:31
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-black">
                      30:55
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-black">
                      04:07
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleResult;
