import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const Navigation = ({ yAxis }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const transitionNavbar = () => {
      if (window.scrollY >= yAxis) {
        setShow(true);
      } else setShow(false);
    };
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, [yAxis]);
  return (
    <div id="navigation">
      {/* Mobile Navigation */}
      <nav
        id="mobile-nav"
        className={`fixed bottom-0 backdrop-blur-sm z-50 max-h-40 w-full py-2 transition-all ease-in md:hidden ${
          show
            ? 'bg-main shadow-0_8px_32px_0_rgba(31,38,135,0.37)]'
            : 'bg-transparent'
        } `}
      >
        <div className="flex items-center justify-evenly text-white">
          <Link passHref href="/" title="Home">
            <a className="flex flex-col items-center justify-center text-2xl hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                ></path>
              </svg>
              <span className="text-sm capitalize">Home</span>
            </a>
          </Link>

          <Link passHref href="#about" title="About">
            <a className="flex flex-col items-center justify-center text-2xl hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14"
                ></path>
              </svg>

              <span className="text-sm capitalize ">About</span>
            </a>
          </Link>

          <Link
            href="https://projects.swayechateau.com"
            passHref
            title="Projects"
            target="_blank"
          >
            <a className="flex flex-col items-center justify-center text-2xl hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M13.03 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V17.5L20.96 16.44C20.97 16.3 21 16.15 21 16C21 14.88 20.62 13.86 20 13.03V8H4V18H11.42C11.77 18.8 12.33 19.5 13.03 20M22.87 21.19L18.76 17.08C19.17 16.04 18.94 14.82 18.08 13.97C17.18 13.06 15.83 12.88 14.74 13.38L16.68 15.32L15.33 16.68L13.34 14.73C12.8 15.82 13.05 17.17 13.93 18.08C14.79 18.94 16 19.16 17.05 18.76L21.16 22.86C21.34 23.05 21.61 23.05 21.79 22.86L22.83 21.83C23.05 21.65 23.05 21.33 22.87 21.19Z"
                ></path>
              </svg>

              <span className="text-sm capitalize ">Projects</span>
            </a>
          </Link>

          <Link
            href="https://blog.swayechateau.com"
            title="Blog"
            passHref
            target="_blank"
          >
            <a className="flex flex-col items-center justify-center text-2xl hover:text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z"
                ></path>
              </svg>

              <span className="text-sm capitalize ">Blog</span>
            </a>
          </Link>
        </div>
      </nav>
      {/* Desktop Navigation */}
      <nav
        id="desktop-nav"
        className={`fixed top-0 z-50 hidden h-16 w-full backdrop-blur-sm transition-all ease-in md:flex ${
          show
            ? 'bg-main shadow-0_8px_32px_0_rgba(31,38,135,0.37)]'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-center">
          <h1 className="mx-3 my-2">
            <span className="text-3xl font-bold text-green-500">S</span>
            <span className="text-3xl font-bold text-yellow-500">C</span>
          </h1>
        </div>
        <div className="flex grow items-center justify-center space-x-3">
          <Link href="/" passHref title="Home">
            <a className="p-1 text-2xl capitalize text-white transition-all ease-in hover:text-green-400">
              Home
            </a>
          </Link>
          <Link
            passHref
            href="https://projects.swayechateau.com"
            target="_blank"
          >
            <a className="p-1 text-2xl capitalize text-white transition-all ease-in hover:text-green-400">
              Projects
            </a>
          </Link>
          <Link href="#about">
            <a className="p-1 text-2xl capitalize text-white transition-all ease-in hover:text-green-400">
              About
            </a>
          </Link>
          <Link passHref href="https://blog.swayechateau.com" target="_blank">
            <a className="p-1 text-2xl capitalize text-white transition-all ease-in hover:text-green-400">
              Blog
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
