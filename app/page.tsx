import { Box, Heading } from "@chakra-ui/react";
import SuzanneWLogo from "@/app/assets/logo";
export default async function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginTop="5vh"
    >
      <SuzanneWLogo fontSize={{ base: "280px", lg: "500px" }} />
      <Heading size={{ base: "sm", lg: "md" }}>Website coming soon...</Heading>
    </Box>
  );
}
