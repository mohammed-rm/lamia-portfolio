import icon from "@/public/logo.png";
import {
  agile,
  arduino,
  cascade,
  cpp,
  essentials,
  fullstack,
  git,
  marketing,
  maths,
  michigan,
  mvc,
  nsi,
  python,
} from "@/public/certificates";

export const certificates = {
  1: {
    category: "Data",
    icon: icon,
    image: {
      1: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: python,
      },
      2: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: maths,
      },
      3: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: fullstack,
      },
      4: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: essentials,
      },
    },
  },
  2: {
    category: "Gestion de projet",
    icon: icon,
    image: {
      1: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: git,
      },
      2: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: cascade,
      },
      3: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: agile,
      },
    },
  },
  3: {
    category: "Soft skills",
    icon: icon,
    image: {
      1: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: michigan,
      },
      2: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: nsi,
      },
      3: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: marketing,
      },
    },
  },
  4: {
    category: "Informatique générale",
    icon: icon,
    image: {
      1: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: mvc,
      },
      2: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: cpp,
      },
      3: {
        title: "Duis aute irure dolor in reprehenderit in voluptate",
        src: arduino,
      },
    },
  },
};
