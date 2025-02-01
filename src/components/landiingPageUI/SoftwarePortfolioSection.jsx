"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const SoftwarePortfolioData = [
  {
    title: "Next Js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#D9D9DE"
          fillRule="evenodd"
          d="M63.054 37.67A19.907 19.907 0 0 1 52 41c-11.046 0-20-8.954-20-20S40.954 1 52 1s20 8.954 20 20c0 6-2.643 11.384-6.828 15.05l-4.95-6.407V13h-2.666v13.19L47.365 13H44v15.993h2.692V16.42L63.054 37.67Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    colors: [
      [255, 255, 190], // RGB format for this card
      [255, 255, 190], // RGB format for this card
    ],
  },
  {
    title: "Astro",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="white"
          d="M45.8295 35.7732C43.9321 34.0388 43.3782 30.3945 44.1687 27.7542C45.5394 29.4188 47.4386 29.9462 49.4058 30.2438C52.4428 30.7031 55.4253 30.5313 58.2465 29.1433C58.5692 28.9843 58.8675 28.773 59.2201 28.559C59.4848 29.327 59.5537 30.1023 59.4613 30.8914C59.2365 32.8133 58.28 34.2978 56.7589 35.4232C56.1506 35.8733 55.5069 36.2757 54.8787 36.7001C52.9486 38.0046 52.4265 39.5342 53.1517 41.759C53.1689 41.8136 53.1843 41.8677 53.2233 42C52.2379 41.5588 51.5181 40.9166 50.9696 40.0723C50.3904 39.1814 50.1148 38.1957 50.1002 37.1291C50.093 36.6101 50.093 36.0864 50.0232 35.5747C49.8528 34.3272 49.2671 33.7687 48.1638 33.7365C47.0316 33.7035 46.1359 34.4035 45.8984 35.5059C45.8803 35.5904 45.854 35.674 45.8277 35.7723L45.8295 35.7732Z"
        />
      </svg>
    ),
    colors: [
      [255, 255, 249], // RGB format for this card
      [255, 255, 249], // RGB format for this card
    ],
  },
  {
    title: "Expo",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#D9D9DE"
          d="M50.955 16.235c.327-.482.685-.544.975-.544.29 0 .775.061 1.102.544 2.578 3.543 6.835 10.6 9.974 15.806 2.047 3.395 3.62 6.003 3.943 6.335 1.21 1.245 2.872.47 3.837-.944.95-1.391 1.214-2.368 1.214-3.41 0-.71-13.766-26.322-15.153-28.454C55.514 3.518 55.08 3 52.797 3H51.09c-2.275 0-2.604.518-3.937 2.568C45.767 7.7 32 33.312 32 34.022c0 1.042.264 2.019 1.214 3.41.965 1.413 2.626 2.19 3.837.944.323-.332 1.896-2.94 3.943-6.335 3.14-5.206 7.382-12.263 9.96-15.806Z"
        />
      </svg>
    ),
    colors: [
      [255, 255, 255], // RGB format for this card
      [255, 255, 255], // RGB format for this card
    ],
  },
  {
    title: "Firebase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#FFA000"
          d="m56.525 15.448-4.003 3.725-3.715-7.494 1.922-4.31c.5-.875 1.28-.865 1.768 0l4.028 8.079Z"
        />
        <path
          fill="#F57F17"
          d="m48.808 11.679 3.715 7.493-14.963 13.92 11.248-21.413Z"
        />
        <path
          fill="#FFCA28"
          d="M60.906 9.754c.715-.688 1.455-.453 1.643.521l3.895 22.631-12.91 7.75c-.45.25-1.65.358-1.65.358s-1.092-.13-1.508-.375L37.56 33.09 60.906 9.754Z"
        />
        <path
          fill="#FFA000"
          d="M48.809 11.679 37.563 33.09 42.57 1.798c.185-.975.74-1.07 1.235-.21l5.003 10.09Z"
        />
      </svg>
    ),
    colors: [
      [255, 255, 23], // RGB format for this card
      [255, 255, 23], // RGB format for this card
    ],
  },
  {
    title: "React Js",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#61DAFB"
          fillRule="evenodd"
          d="M61.023 5.37c1.497.865 2.338 3.203 1.965 6.896-.022.217-.048.437-.078.66a34.32 34.32 0 0 0-5.576-1.165 34.327 34.327 0 0 0-3.797-4.246c.178-.138.355-.27.532-.398 3.011-2.17 5.457-2.61 6.954-1.747ZM52 6.18c-.3-.241-.601-.47-.9-.686-3.123-2.25-6.52-3.358-9.124-1.855-2.602 1.502-3.341 5-2.954 8.828.037.367.085.742.143 1.123-.359.14-.707.286-1.044.438-3.51 1.579-6.169 3.967-6.169 6.972 0 3.006 2.66 5.394 6.169 6.973.336.152.684.297 1.043.438-.058.38-.106.755-.143 1.122-.387 3.83.352 7.326 2.955 8.829 2.602 1.503 6 .394 9.123-1.856.3-.216.6-.444.9-.685.302.24.602.47.902.685 3.122 2.25 6.52 3.359 9.123 1.856 2.603-1.503 3.341-5 2.954-8.829a22.206 22.206 0 0 0-.143-1.123c.359-.14.707-.285 1.044-.437 3.51-1.58 6.168-3.967 6.168-6.973 0-3.005-2.659-5.393-6.168-6.973a22.168 22.168 0 0 0-1.044-.437c.058-.381.105-.756.143-1.123.387-3.83-.352-7.326-2.955-8.829-2.603-1.502-6-.394-9.123 1.856-.3.216-.6.444-.9.685Zm0 2.637c-.86.79-1.72 1.69-2.565 2.687a43.462 43.462 0 0 1 5.13 0A30.273 30.273 0 0 0 52 8.817Zm-5.335 2.944c-1.999.255-3.876.651-5.575 1.166a19.9 19.9 0 0 1-.078-.661c-.373-3.692.468-6.031 1.964-6.895 1.497-.865 3.943-.424 6.954 1.746.177.127.355.26.533.398a34.327 34.327 0 0 0-3.798 4.246Zm-1.608 2.27a43.487 43.487 0 0 0-2.563 4.44c-.44-1.229-.79-2.424-1.045-3.562a30.261 30.261 0 0 1 3.608-.877ZM43.51 21a40.639 40.639 0 0 1 1.932-3.785 40.679 40.679 0 0 1 2.312-3.566 40.69 40.69 0 0 1 4.246-.22c1.464 0 2.885.077 4.245.22a40.684 40.684 0 0 1 2.312 3.567 40.659 40.659 0 0 1 1.933 3.784 40.681 40.681 0 0 1-1.934 3.787 40.688 40.688 0 0 1-2.312 3.567 40.67 40.67 0 0 1-4.244.219c-1.464 0-2.885-.076-4.245-.22a40.694 40.694 0 0 1-2.312-3.566 40.672 40.672 0 0 1-1.933-3.787Zm-2.179 0a34.324 34.324 0 0 1-1.778-5.41c-.209.085-.412.173-.612.262-3.384 1.523-4.989 3.421-4.989 5.15 0 1.728 1.605 3.625 4.99 5.148.198.09.402.177.61.263.404-1.73 1-3.553 1.78-5.413Zm.117 6.093a30.23 30.23 0 0 1 1.046-3.565 43.528 43.528 0 0 0 2.564 4.442 30.26 30.26 0 0 1-3.61-.877Zm-.359 1.982c-.03.223-.056.443-.078.66-.373 3.693.468 6.032 1.965 6.896 1.496.864 3.942.423 6.953-1.747.178-.127.355-.26.534-.398a34.32 34.32 0 0 1-3.797-4.246c-2-.255-3.877-.65-5.577-1.165Zm12.447 5.411c.179.138.357.271.534.399 3.011 2.17 5.457 2.61 6.954 1.746 1.497-.864 2.338-3.203 1.965-6.895a19.91 19.91 0 0 0-.079-.661c-1.7.514-3.577.91-5.577 1.165a34.313 34.313 0 0 1-3.797 4.246Zm1.027-3.988A30.258 30.258 0 0 1 52 33.183a30.273 30.273 0 0 1-2.564-2.686 43.431 43.431 0 0 0 5.127 0Zm4.378-2.528a30.272 30.272 0 0 0 3.61-.877 30.251 30.251 0 0 0-1.045-3.565 43.49 43.49 0 0 1-2.565 4.442Zm3.727-6.97a34.33 34.33 0 0 1 1.78 5.413c.208-.086.411-.173.61-.263 3.384-1.523 4.99-3.42 4.99-5.149 0-1.728-1.606-3.626-4.99-5.149-.199-.09-.403-.177-.612-.263-.404 1.73-1 3.553-1.778 5.411Zm-.118-6.09a30.263 30.263 0 0 0-3.608-.877 43.45 43.45 0 0 1 2.564 4.44c.44-1.23.789-2.425 1.044-3.563ZM55.81 21a3.81 3.81 0 1 1-7.62 0 3.81 3.81 0 0 1 7.62 0Z"
          clipRule="evenodd"
        />
        <path
          fill="url(#paint0_linear_485_6372)"
          fillOpacity=".4"
          fillRule="evenodd"
          d="M61.023 5.37c1.497.865 2.338 3.203 1.965 6.896-.022.217-.048.437-.078.66a34.32 34.32 0 0 0-5.576-1.165 34.327 34.327 0 0 0-3.797-4.246c.178-.138.355-.27.532-.398 3.011-2.17 5.457-2.61 6.954-1.747ZM52 6.18c-.3-.241-.601-.47-.9-.686-3.123-2.25-6.52-3.358-9.124-1.855-2.602 1.502-3.341 5-2.954 8.828.037.367.085.742.143 1.123-.359.14-.707.286-1.044.438-3.51 1.579-6.169 3.967-6.169 6.972 0 3.006 2.66 5.394 6.169 6.973.336.152.684.297 1.043.438-.058.38-.106.755-.143 1.122-.387 3.83.352 7.326 2.955 8.829 2.602 1.503 6 .394 9.123-1.856.3-.216.6-.444.9-.685.302.24.602.47.902.685 3.122 2.25 6.52 3.359 9.123 1.856 2.603-1.503 3.341-5 2.954-8.829a22.206 22.206 0 0 0-.143-1.123c.359-.14.707-.285 1.044-.437 3.51-1.58 6.168-3.967 6.168-6.973 0-3.005-2.659-5.393-6.168-6.973a22.168 22.168 0 0 0-1.044-.437c.058-.381.105-.756.143-1.123.387-3.83-.352-7.326-2.955-8.829-2.603-1.502-6-.394-9.123 1.856-.3.216-.6.444-.9.685Zm0 2.637c-.86.79-1.72 1.69-2.565 2.687a43.462 43.462 0 0 1 5.13 0A30.273 30.273 0 0 0 52 8.817Zm-5.335 2.944c-1.999.255-3.876.651-5.575 1.166a19.9 19.9 0 0 1-.078-.661c-.373-3.692.468-6.031 1.964-6.895 1.497-.865 3.943-.424 6.954 1.746.177.127.355.26.533.398a34.327 34.327 0 0 0-3.798 4.246Zm-1.608 2.27a43.487 43.487 0 0 0-2.563 4.44c-.44-1.229-.79-2.424-1.045-3.562a30.261 30.261 0 0 1 3.608-.877ZM43.51 21a40.639 40.639 0 0 1 1.932-3.785 40.679 40.679 0 0 1 2.312-3.566 40.69 40.69 0 0 1 4.246-.22c1.464 0 2.885.077 4.245.22a40.684 40.684 0 0 1 2.312 3.567 40.659 40.659 0 0 1 1.933 3.784 40.681 40.681 0 0 1-1.934 3.787 40.688 40.688 0 0 1-2.312 3.567 40.67 40.67 0 0 1-4.244.219c-1.464 0-2.885-.076-4.245-.22a40.694 40.694 0 0 1-2.312-3.566 40.672 40.672 0 0 1-1.933-3.787Zm-2.179 0a34.324 34.324 0 0 1-1.778-5.41c-.209.085-.412.173-.612.262-3.384 1.523-4.989 3.421-4.989 5.15 0 1.728 1.605 3.625 4.99 5.148.198.09.402.177.61.263.404-1.73 1-3.553 1.78-5.413Zm.117 6.093a30.23 30.23 0 0 1 1.046-3.565 43.528 43.528 0 0 0 2.564 4.442 30.26 30.26 0 0 1-3.61-.877Zm-.359 1.982c-.03.223-.056.443-.078.66-.373 3.693.468 6.032 1.965 6.896 1.496.864 3.942.423 6.953-1.747.178-.127.355-.26.534-.398a34.32 34.32 0 0 1-3.797-4.246c-2-.255-3.877-.65-5.577-1.165Zm12.447 5.411c.179.138.357.271.534.399 3.011 2.17 5.457 2.61 6.954 1.746 1.497-.864 2.338-3.203 1.965-6.895a19.91 19.91 0 0 0-.079-.661c-1.7.514-3.577.91-5.577 1.165a34.313 34.313 0 0 1-3.797 4.246Zm1.027-3.988A30.258 30.258 0 0 1 52 33.183a30.273 30.273 0 0 1-2.564-2.686 43.431 43.431 0 0 0 5.127 0Zm4.378-2.528a30.272 30.272 0 0 0 3.61-.877 30.251 30.251 0 0 0-1.045-3.565 43.49 43.49 0 0 1-2.565 4.442Zm3.727-6.97a34.33 34.33 0 0 1 1.78 5.413c.208-.086.411-.173.61-.263 3.384-1.523 4.99-3.42 4.99-5.149 0-1.728-1.606-3.626-4.99-5.149-.199-.09-.403-.177-.612-.263-.404 1.73-1 3.553-1.778 5.411Zm-.118-6.09a30.263 30.263 0 0 0-3.608-.877 43.45 43.45 0 0 1 2.564 4.44c.44-1.23.789-2.425 1.044-3.563ZM55.81 21a3.81 3.81 0 1 1-7.62 0 3.81 3.81 0 0 1 7.62 0Z"
          clipRule="evenodd"
          style={{ mixBlendMode: "overlay" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_485_6372"
            x1="52"
            x2="52"
            y1="2.95"
            y2="39.051"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset=".775" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    colors: [
      [255, 255, 245], // RGB format for this card
      [255, 255, 245], // RGB format for this card
    ],
  },
  {
    title: "Remix",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#EEEEF0"
          d="M67.002 40c0-2.128 0-5.078-.332-9.238-.41-4.178-2.635-6.296-6.442-7.04 4.51-.573 7.848-4.007 7.848-9.274C68.076 7.408 63.332 3 53.786 3h-17.71v7.338h15.952c4.217 0 6.326 1.769 6.326 4.688 0 3.32-2.109 4.574-6.326 4.574H36.076V27.1H51.56c3.338 0 5.154.916 5.447 5.037.221 2.815.193 4.209.167 5.545v.001c-.009.43-.017 1.854-.017 2.318h9.845Z"
        />
        <path
          fill="url(#paint0_linear_485_6345)"
          fillOpacity=".4"
          d="M67.002 40c0-2.128 0-5.078-.332-9.238-.41-4.178-2.635-6.296-6.442-7.04 4.51-.573 7.848-4.007 7.848-9.274C68.076 7.408 63.332 3 53.786 3h-17.71v7.338h15.952c4.217 0 6.326 1.769 6.326 4.688 0 3.32-2.109 4.574-6.326 4.574H36.076V27.1H51.56c3.338 0 5.154.916 5.447 5.037.221 2.815.193 4.209.167 5.545v.001c-.009.43-.017 1.854-.017 2.318h9.845Z"
          style={{ mixBlendMode: "overlay" }}
        />
        <path fill="#EEEEF0" d="m36 34 .076 6h12v-3.943s0-2.057-2-2.057H36Z" />
        <path
          fill="url(#paint1_linear_485_6345)"
          fillOpacity=".4"
          d="m36 34 .076 6h12v-3.943s0-2.057-2-2.057H36Z"
          style={{ mixBlendMode: "overlay" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear_485_6345"
            x1="52.038"
            x2="52.038"
            y1="3"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset=".775" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_485_6345"
            x1="52.038"
            x2="52.038"
            y1="3"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fff" />
            <stop offset=".775" stop-color="#fff" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    colors: [
      [255, 255, 153], // RGB format for this card
      [255, 255, 153], // RGB format for this card
    ],
  },

  {
    title: "Supabase",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#3ECF8E"
          d="M48.868 2.837c1.157-1.518 3.108-.81 3.132.837V28H36.436c-2.87 0-4.47-3.39-2.686-5.689L48.868 2.837Z"
        />
        <path
          fill="url(#paint0_linear_219_13847)"
          d="M55.132 39.163c-1.157 1.518-3.108.81-3.132-.837V14h15.564c2.87 0 4.47 3.39 2.686 5.689L55.132 39.163Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_219_13847"
            x1="50"
            x2="67.482"
            y1="15.5"
            y2="30.955"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#249361" />
            <stop offset="1" stop-color="#3ECF8E" />
          </linearGradient>
        </defs>
      </svg>
    ),
    colors: [
      [255, 255, 153], // RGB format for this card
      [255, 255, 153], // RGB format for this card
    ],
  },

  {
    title: "Convex",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="42"
        fill="none"
      >
        <path
          fill="#F3B01C"
          d="M57.276 32.527c5.956-.646 11.57-3.743 14.663-8.913-1.464 12.787-15.79 20.87-27.485 15.907a5.887 5.887 0 0 1-2.642-2.19c-2.627-4.027-3.491-9.152-2.25-13.803 3.546 5.974 10.757 9.636 17.714 9Z"
        />
        <path
          fill="#8D2676"
          d="M39.345 19.776c-2.415 5.445-2.52 11.82.44 17.067-10.416-7.649-10.302-24.016-.127-31.588a5.951 5.951 0 0 1 3.233-1.179c4.824-.248 9.725 1.571 13.163 4.962-6.984.068-13.786 4.434-16.71 10.738Z"
        />
        <path
          fill="#EE342F"
          d="M59.421 10.714c-3.523-4.795-9.039-8.06-15.081-8.158C56.02-2.62 70.388 5.77 71.952 18.174a5.851 5.851 0 0 1-.569 3.364c-2.182 4.325-6.228 7.68-10.957 8.922a18.736 18.736 0 0 0-1.005-19.746Z"
        />
      </svg>
    ),
    colors: [
      [255, 255, 245], // RGB format for this card
      [255, 255, 245], // RGB format for this card
    ],
  },
];

export function SoftwarePortfolioCanvasRevealEffect() {
  return (
    <>
      <div className="text-center mt-8 md:mt-28">
        <h1 class="text-gray-900 dark:text-zinc-50 font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Everything you need for authentication
        </h1>
        <p class="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          Ever feel like authentication requirements change with the season?
          <br />
          Clerk keeps up with the latest trends and security best practices.
        </p>

        <div className="py-20 flex flex-wrap flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-1 mx-auto px-8">
          {SoftwarePortfolioData.map((softwareCard) => (
            <Card
              title={softwareCard.title}
              icon={softwareCard.icon}
              key={softwareCard.title}
            >
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="bg-black"
                //   colors={[
                //     [236, 72, 153],
                //     [232, 121, 249],
                //   ]}

                colors={softwareCard.colors}
                dotSize={2}
              />
              {/* Radial gradient for the cute fade */}
              <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-[15rem] mx-auto p-4 relative min-h-[15rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-100 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-1  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

const NextJsIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="42" fill="none">
      <path
        fill="#D9D9DE"
        fillRule="evenodd"
        d="M63.054 37.67A19.907 19.907 0 0 1 52 41c-11.046 0-20-8.954-20-20S40.954 1 52 1s20 8.954 20 20c0 6-2.643 11.384-6.828 15.05l-4.95-6.407V13h-2.666v13.19L47.365 13H44v15.993h2.692V16.42L63.054 37.67Z"
        clipRule="evenodd"
      />
      <path
        fill="url(#paint0_linear_485_6386)"
        fillOpacity=".4"
        fillRule="evenodd"
        d="M63.054 37.67A19.907 19.907 0 0 1 52 41c-11.046 0-20-8.954-20-20S40.954 1 52 1s20 8.954 20 20c0 6-2.643 11.384-6.828 15.05l-4.95-6.407V13h-2.666v13.19L47.365 13H44v15.993h2.692V16.42L63.054 37.67Z"
        clipRule="evenodd"
        style={{ mixBlendMode: "overlay" }} // Corrected style prop
      />
      <defs>
        <linearGradient
          id="paint0_linear_485_6386"
          x1="52"
          x2="52"
          y1="1"
          y2="41"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset=".775" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
