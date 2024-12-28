import { Heading } from "@chakra-ui/react";
import { getContent } from "@/app/lib";
import { Button } from "@my-components/button";

export default async function Home() {
  const { data } = getContent("home");

  console.dir(data);

  return (
    <>
      <Heading>Hello world</Heading>
      <Button>Click me</Button>
    </>
  );
}
