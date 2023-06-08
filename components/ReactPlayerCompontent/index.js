"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export default function ReactPlayerCompontent(props) {
  return <ReactPlayer {...props} />;
}
