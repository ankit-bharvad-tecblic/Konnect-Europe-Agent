import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Spacer,
  StackDivider,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";
const footerItems = ["Dashboard", "Holiday Package", " Hotel", " Sightseen"];
export default function Footer() {
  return (
    <Box bg={"white"} position="relative">
      <Box boxSize="sm" position={"absolute"} zIndex="-0">
        <Image src="/assets/icons/footerIcon.svg" alt="Dan Abramov" />
      </Box>
      <VStack
        divider={<StackDivider borderColor="gray.100" />}
        spacing={4}
        px={4}
        mx="auto"
        maxW={"80%"}
        align="stretch"
        py={6}
      >
        <Box>
          <SimpleGrid
            maxW={"3xl"}
            fontFamily="lato"
            columns={[2, null, 4]}
            spacing={4}
          >
            {footerItems.map((item, index) => (
              <Box key={index}>
                <Text fontWeight={600} color={"primary"} size="sm">
                  {item}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box my="2">
          <Heading
            color="primary"
            fontWeight={700}
            fontFamily="Alegreya Sans SC"
            as="h1"
            size="3xl"
            noOfLines={1}
            my="2"
          >
            Konnect Europe
          </Heading>
          <Heading as="h6" size="xs">
            71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
            Kingdom
          </Heading>
        </Box>

        <Flex>
          <Box>
            <Text>© 2019 Lift Media. All rights reserved.</Text>
          </Box>
          <Spacer />
          <Box>
            <Stack direction={"row"} border={1} spacing={4}>
              <Text>Terms of Service</Text>
              <Text> Privacy Policy</Text>
            </Stack>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
