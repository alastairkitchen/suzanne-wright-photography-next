import { Heading, Text } from "@chakra-ui/react";
import { getContent } from "@/app/lib";
import { Button } from "@my-components/button";

type Cat = {
  name: string;
  description: string;
};

export default async function Home() {
  const { data } = getContent("home");

  console.dir("DATA");
  console.dir(data);

  return (
    <>
      <Heading>Hello world</Heading>

      {data.cats.map((cat: Cat, i: number) => (
        <Text key={i}>{cat.name}</Text>
      ))}
      <Button>Click me</Button>
    </>
  );
}
