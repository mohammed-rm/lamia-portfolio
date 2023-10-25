"use client";

import { useEffect, useState } from "react";
import { GoArrowUp } from "react-icons/go";
import { Link } from "@nextui-org/react";

export default function ScrollUp() {
  const [hasScrollToTopButton, setHasScrollToTopButton] = useState(false);

  function toggleScrollTopButton() {
    setHasScrollToTopButton(
      document.body.scrollTop > 500 || document.documentElement.scrollTop > 500,
    );
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleScrollTopButton);

    return () => {
      window.removeEventListener("scroll", toggleScrollTopButton);
    };
  }, []);

  return (
    <>
      {
        <Link
          href={"#hero"}
          className="w-8 h-8 cursor-pointer fixed bottom-5 right-5 lg:bottom-10
          lg:right-10 z-20 rounded-full bg-primary/50 flex justify-center
          items-center animate-pulse transition-all"
        >
          <GoArrowUp />
        </Link>
      }
    </>
  );
}
