
import Footer from "@/components/common-layout/Footer";
import Header from "@/components/common-layout/Header";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
