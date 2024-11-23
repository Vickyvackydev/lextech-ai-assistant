import Image from "next/image";
import { Inter } from "next/font/google";

import LexTechAi from "./lextech-ai";
import Login from "./login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Login />;
}
