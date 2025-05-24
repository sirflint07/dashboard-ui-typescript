import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Finance Dashboard Admin - TypeScript Build",
  description: "A modern finance dashboard built with TypeScript, showcasing real-time data visualization and analytics.",
  icons: "/favicon.png",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
