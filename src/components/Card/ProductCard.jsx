import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Image,
  Icon,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const ProductCard = () => {
  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        // border="1px"
        overflow={"hidden"}
      >
        <Stack
          textAlign={"center"}
          p={2}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Box rounded={"lg"} pos={"relative"} height={"200px"}>
            <Image
              rounded={"lg"}
              height={200}
              width={"100%"}
              objectFit={"cover"}
              src={"/assets/images/products/product.png"}
            />
          </Box>
        </Stack>

        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} pt={2} pb={8}>
          <Flex justifyContent="space-between" alignContent="start">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              testing
            </Box>
          </Flex>
          <List spacing={3}>
            <ListItem>
              <Icon viewBox="0 0 200 200">
                <path
                  fill="#5E6282"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Tour combo with return airport transfer
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200">
                <path
                  fill="#5E6282"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Tour combo with return airport transfer
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200">
                <path
                  fill="#5E6282"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Tour combo with return airport transfer
            </ListItem>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"secondary"}
            color={"white"}
            py={2}
            rounded={"16px"}
            _hover={{
              bg: "secondary",
            }}
            _focus={{
              bg: "secondary",
            }}
          >
            Start your trial
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default ProductCard;
