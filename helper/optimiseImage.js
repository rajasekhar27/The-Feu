"use client";

export default function optimiseImage(path) {
  if (process.env.NODE_ENV === "development") {
    return `${process.env.NEXT_PUBLIC_URL}${path}`;
  } else {
    return `${process.env.NEXT_PUBLIC_URL}${path}`;
  }
}
