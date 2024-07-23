import React, { useState } from "react";
import Image from "../assets/salem_marathon_2024.jpg";
import BackgroundImage from "../assets/bg_badge.png";
import LogoImage from "../assets/nova_logo.png";
import CircleImage from "../assets/Removal-162.png";
import DownloadImage from "../assets/download_badge.png";
import "./SingleResult.css";

const SingleResult = () => {
  return (
    <div className="bg-[#fffafa] w-full min-h-screen overflow-hidden">
      {/* banner and name div start */}
      <section className="text-gray-600 body-font 2xl:mr-32">
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
                <div className="flex -mt-14 justify-center items-center relative lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <img
                    className="align-center align-middle"
                    src={CircleImage}
                    style={{ height: "320px" }}
                  />
                  <p className="absolute text-4xl lg:-mt-5 font-bold text-white title-font">
                    NK
                  </p>
                </div>
                <div className="-mt-16 lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <p
                    className="2xl:text-2xl xl:text-xl text-2xl font-extrabold uppercase text-neutral-200 title-font mb-2 "
                    style={{ fontFamily: "Anton, sans-serif" }}
                  >
                    Navaneetha Krishnan
                  </p>
                  <p className="2xl:text-3xl xl:text-xl  text-2xl font-semibold uppercase text-neutral-200 title-font mb-2">
                    BIB : 1118
                  </p>
                </div>
                <div className="mt-10 lg:-ml-6 xl:-ml-0 2xl:ml-0">
                  <p className="2xl:text-2xl xl:text-2xl lg:text-xl text-2xl font-semibold uppercase text-neutral-200 title-font mb-0">
                    SALEM MARATHON 2024
                  </p>
                  <p className="2xl:text-2xl xl:text-2xl lg:text-lg text-2xl font-semibold uppercase text-neutral-200 title-font mb-2">
                    5km, 10km, 21km
                  </p>
                  <p className="2xl:text-2xl xl:text-2xl lg:text-lg text-xl font-semibold uppercase text-neutral-200 title-font mb-2">
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
            <div className="flex justify-center space-x-4 md:ml-0 -mt-7 sm:mt-10 md:mt-16 lg:-mt-16 xl:mt-4 sm:-ml-48 lg:ml-32 xl:ml-32 2xl:ml-4">
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
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.433 13.9322H16.4664V9.75225C16.4664 9.58428 16.3997 9.42319 16.2809 9.30442C16.1621 9.18565 16.0011 9.11893 15.8331 9.11893H8.23321C8.06524 9.11893 7.90415 9.18565 7.78538 9.30442C7.66661 9.42319 7.59988 9.58428 7.59988 9.75225V16.6396H0.633323C0.465356 16.6396 0.304267 16.7006 0.185496 16.8251C0.0667251 16.9439 0 17.105 0 17.273V24.7937C0 24.9616 0.0667251 25.1227 0.185496 25.2415C0.304267 25.3603 0.465356 25.427 0.633323 25.427H23.433C23.6009 25.427 23.762 25.3603 23.8808 25.2415C23.9996 25.1227 24.0663 24.9616 24.0663 24.7937V14.5655C24.0663 14.3975 23.9996 14.2365 23.8808 14.1177C23.762 13.9989 23.6009 13.9322 23.433 13.9322ZM1.26665 17.9063H7.59988V24.1604H1.26665V17.9063ZM8.86653 17.273V10.3856H15.1998V24.1604H8.86653V17.273ZM22.7996 24.1604H16.4664V15.1988H22.7996V24.1604Z"
                    fill="white"
                  ></path>
                  <path
                    d="M9.89595 4.66665L9.66795 6.45896C9.65271 6.5759 9.67043 6.69478 9.7191 6.80219C9.76778 6.90961 9.84548 7.00131 9.94345 7.06695C10.0477 7.13568 10.17 7.17204 10.2949 7.17145C10.4062 7.17125 10.5154 7.14176 10.6116 7.08595L12.1759 6.17713L13.8067 6.94978C13.9136 7.00032 14.0324 7.01994 14.1499 7.00643C14.2673 6.99292 14.3786 6.94682 14.4712 6.87334C14.5638 6.79987 14.6339 6.70195 14.6738 6.59066C14.7136 6.47938 14.7215 6.35917 14.6965 6.24363L14.3165 4.47982L15.5547 3.16568C15.6365 3.0798 15.6926 2.97267 15.7165 2.85648C15.7405 2.74029 15.7313 2.61972 15.69 2.5085C15.6488 2.39727 15.5771 2.29987 15.4832 2.22739C15.3893 2.15491 15.2769 2.11026 15.1589 2.09853L13.3602 1.91486L12.4957 0.331554C12.4392 0.227328 12.3546 0.141052 12.2515 0.082541C12.1484 0.02403 12.031 -0.00436635 11.9125 0.000582751C11.7941 0.00553185 11.6794 0.0436278 11.5815 0.110536C11.4837 0.177444 11.4065 0.270478 11.3589 0.379053L10.6306 2.03203L8.8668 2.36769C8.74942 2.38769 8.64005 2.44037 8.55125 2.5197C8.46245 2.59903 8.39781 2.70178 8.36475 2.81617C8.33168 2.93056 8.33154 3.05196 8.36433 3.16643C8.39712 3.2809 8.46152 3.3838 8.55014 3.46334L9.89595 4.66665ZM11.1911 3.21634C11.2922 3.19727 11.3871 3.15386 11.4677 3.08986C11.5482 3.02585 11.612 2.94319 11.6534 2.84902L11.9986 2.06686L12.4102 2.81735C12.4606 2.90565 12.5315 2.98053 12.617 3.03564C12.7024 3.09076 12.7998 3.1245 12.9011 3.13401L13.7529 3.21951L13.1671 3.85283C13.0968 3.92745 13.0456 4.01801 13.0181 4.11674C12.9905 4.21547 12.9873 4.31942 13.0087 4.41966L13.1892 5.25564L12.4134 4.89148C12.3205 4.84763 12.2184 4.82703 12.1158 4.83144C12.0132 4.83585 11.9132 4.86515 11.8244 4.91682L11.0834 5.34431L11.1911 4.49566C11.2039 4.39402 11.1919 4.29078 11.156 4.19482C11.1202 4.09885 11.0616 4.01301 10.9853 3.94466L10.3519 3.37467L11.1911 3.21634Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <span
                className="ml-3 mt-2 text-white font-semibold"
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
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7962 7.17542C17.7826 5.16177 15.1733 3.99895 12.3655 3.82878V1.53151H14.124C14.5494 1.53151 14.8897 1.19118 14.8897 0.765756C14.8897 0.340336 14.5494 0 14.124 0H9.10399C8.67857 0 8.33824 0.340336 8.33824 0.765756C8.33824 1.19118 8.67857 1.53151 9.10399 1.53151H10.8624V3.80042C8.05462 3.97059 5.41702 5.16176 3.40336 7.14706C3.26155 7.28887 3.17647 7.4874 3.17647 7.68592C3.17647 7.88445 3.26155 8.08298 3.40336 8.22479L5.72899 10.5221C6.0126 10.8057 6.49475 10.8057 6.80672 10.5221C7.09034 10.2384 7.09034 9.7563 6.80672 9.44433L5.04832 7.68592C6.86345 6.09769 9.18908 5.24685 11.6282 5.24685C14.3225 5.24685 16.8466 6.29622 18.7468 8.19643C22.6607 12.167 22.6607 18.5767 18.7185 22.5189C16.8183 24.4191 14.2941 25.4685 11.5998 25.4685C8.90546 25.4685 6.3813 24.4191 4.48109 22.5189C2.58088 20.6187 1.53151 18.0945 1.53151 15.4002C1.53151 14.9748 1.19118 14.6345 0.765756 14.6345C0.340336 14.6345 0 14.9748 0 15.4002C0 18.4916 1.19118 21.4128 3.40336 23.5966C5.58718 25.7805 8.5084 27 11.5998 27C14.6912 27 17.6124 25.7805 19.7962 23.5966C24.3057 19.0588 24.3057 11.7132 19.7962 7.17542Z"
                    fill="white"
                  ></path>
                  <path
                    d="M18.6908 16.2794C19.192 16.2794 19.5983 15.8731 19.5983 15.3718C19.5983 14.8706 19.192 14.4643 18.6908 14.4643C18.1895 14.4643 17.7832 14.8706 17.7832 15.3718C17.7832 15.8731 18.1895 16.2794 18.6908 16.2794Z"
                    fill="white"
                  ></path>
                  <path
                    d="M16.6195 21.2994C17.1207 21.2994 17.527 20.893 17.527 20.3918C17.527 19.8906 17.1207 19.4842 16.6195 19.4842C16.1182 19.4842 15.7119 19.8906 15.7119 20.3918C15.7119 20.893 16.1182 21.2994 16.6195 21.2994Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.5999 23.3697C12.1012 23.3697 12.5075 22.9634 12.5075 22.4622C12.5075 21.9609 12.1012 21.5546 11.5999 21.5546C11.0987 21.5546 10.6924 21.9609 10.6924 22.4622C10.6924 22.9634 11.0987 23.3697 11.5999 23.3697Z"
                    fill="white"
                  ></path>
                  <path
                    d="M6.57944 21.2994C7.08067 21.2994 7.487 20.893 7.487 20.3918C7.487 19.8906 7.08067 19.4842 6.57944 19.4842C6.0782 19.4842 5.67188 19.8906 5.67188 20.3918C5.67188 20.893 6.0782 21.2994 6.57944 21.2994Z"
                    fill="white"
                  ></path>
                  <path
                    d="M4.5101 16.2794C5.01134 16.2794 5.41767 15.8731 5.41767 15.3718C5.41767 14.8706 5.01134 14.4643 4.5101 14.4643C4.00887 14.4643 3.60254 14.8706 3.60254 15.3718C3.60254 15.8731 4.00887 16.2794 4.5101 16.2794Z"
                    fill="white"
                  ></path>
                  <path
                    d="M11.5999 9.18907C12.1012 9.18907 12.5075 8.78274 12.5075 8.28151C12.5075 7.78028 12.1012 7.37395 11.5999 7.37395C11.0987 7.37395 10.6924 7.78028 10.6924 8.28151C10.6924 8.78274 11.0987 9.18907 11.5999 9.18907Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10.0958 16.875C10.9183 17.6975 12.2512 17.6975 13.1021 16.875C13.7544 16.2227 13.7544 15.2868 13.1021 14.7195L12.4781 13.4433C11.7124 13.1029 10.7481 13.2447 10.1241 13.86C9.52941 14.472 9.2733 15.2868 9.52941 16.0525C9.81302 16.8741 10.6071 17.1578 10.0958 16.875Z"
                    fill="white"
                  ></path>
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
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.558 0C17.1597 0.0180059 16.8153 0.407384 16.8336 0.805764C16.8606 1.20382 17.2413 1.55719 17.6394 1.52986H20.383L11.2016 10.7283H0.720509C0.326712 10.7466 -0.0173295 11.136 0.000676431 11.5341C0.0186823 11.9324 0.40806 12.2855 0.806441 12.2585H11.2106L20.392 21.4659H17.6391C17.241 21.4572 16.8693 21.8283 16.8693 22.2264C16.8693 22.6341 17.2407 22.9961 17.6391 22.9961H22.2299C22.6376 22.9961 22.9997 22.6341 22.9997 22.2264V17.6275C23.0087 17.2198 22.6376 16.8397 22.2209 16.8487C21.8225 16.8487 21.4605 17.2198 21.4695 17.6275V20.3798L12.5958 11.4981L21.4698 2.60764V5.36897C21.4698 5.76703 21.8319 6.13873 22.2302 6.13873C22.638 6.13873 23 5.76735 23 5.36897V0.769431C23 0.362047 22.638 0 22.2302 0H17.558Z"
                    fill="white"
                  ></path>
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
      {/* ---------------------- */}
    </div>
  );
};

export default SingleResult;
