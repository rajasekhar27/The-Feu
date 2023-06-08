"use client";

//compontents import
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import HeaderPopup from "../HeaderPopup";
import { useRouter } from "next/router";

export default function Layout(props) {
  //props
  const { children } = props;
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
