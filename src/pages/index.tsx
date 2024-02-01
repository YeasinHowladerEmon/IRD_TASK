import RootLayout from "@/components/Layout/Layouts";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full">
      <h1>hello world</h1>
    </div>
  );
}


Home.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>
}
