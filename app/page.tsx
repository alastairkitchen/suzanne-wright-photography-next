import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { getContent } from "@/app/lib";

export default async function Home() {
  const { data, content } = getContent("home");

  console.dir(data);

  return (
    <>
      <Heading>Hello world</Heading>
    </>
  );
}
