import {
  agile,
  arduino,
  cascade,
  cpp,
  data,
  essentials,
  fullstack,
  git,
  it,
  marketing,
  maths,
  michigan,
  mvc,
  nsi,
  project,
  python,
  skills,
} from "@/public/certificates";

export const certificates = {
  1: {
    category: "Mes certificats en data",
    icon: data,
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
    category: "Mes certificats en gestion de projet",
    icon: project,
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
    category: "Mes certificats en soft skills",
    icon: skills,
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
    category: "Mes certificats en informatique générale",
    icon: it,
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
