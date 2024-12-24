import {
  chronomint,
  invoiceGen,
  mergedAndShare,
  pinbot,
} from "./constants/image";

export const projectData = [
  {
    name: "Merged&Share",
    users: "180",
    visitors: "2300",
    skills: ["NextJs", "Typescript", "Prisma", "PostgreSQL"],
    image: mergedAndShare,
    bgColor: "yellow-500",
    description:
      "Easily showcase your open source contributions with Merged&Share.",
    liveLink: "https://mergedandshare.in/",
    githubLink: "https://github.com/amanbairagi30/merged-n-share",
  },
  {
    name: "PinBot",
    users: "",
    visitors: "",
    skills: ["NodeJs", "Typescript", "Discord.js", "RAG", "Pinecone"],
    image: pinbot,
    bgColor: "purple-500",
    description:
      "A Discord bot that lets you chat with pinned messages using context from pins.",
    liveLink: "https://www.youtube.com/watch?v=4TLyhzNAz5A",
    githubLink: "https://github.com/amanbairagi30/PinBot",
  },
  {
    name: "Chronomint",
    users: "",
    visitors: "",
    skills: ["NextJs", "Typescript", "TailwindCSS", "Frontend"],
    image: chronomint,
    bgColor: "purple-500",
    description:
      "A tool for swapping NFTs into tokens like USDC, USDT, and SOL. Worked on Frontend Only",
    liveLink: "https://chrono-mint.vercel.app/",
    githubLink: "https://github.com/TanmayArchives/ChronoMint",
  },
  {
    name: "Invoice generator",
    users: "",
    visitors: "",
    skills: ["ReactJs", "TailwindCSS"],
    image: invoiceGen,
    bgColor: "red-500",
    description:
      "A invoice generator tool used for making invoices and let user download them easily",
    liveLink: "https://invoice-generator-client.vercel.app/",
    githubLink: "https://github.com/amanbairagi30/invoice-generator-client",
  },
];
