import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#FFFFFF")}
        color={useColorModeValue("#F4FEFF")}
        minH={"24"}
        height="24"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        boxShadow="0px 4px 50px rgba(0, 190, 237, 0.2)"
        borderColor={useColorModeValue("#F4FEFF")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            color="#000"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Box width={250} display={{ base: "none", md: "block" }}>
          <Image
            sx={{ mx: "auto" }}
            //boxSize="70px"
            padding="2px"
            objectFit="cover"
            src="/assets/images/logo/light-logo.png"
            alt="logo"
          />
        </Box>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "center" }}>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
        //flex={{ base: 1, md: 0 }}
        //justify={"flex-center"}
        //direction={"row"}
        >
          {/* <Button onClick={toggleColorMode}>
            {colorMode === "light" ? (
              <MoonIcon color="#000" />
            ) : (
              <SunIcon color="#fff" />
            )}
          </Button> */}
          <Button
            as={"a"}
            sx={{ mx: "auto" }}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"white"}
            borderRadius="30px"
            padding="15px 47px"
            bg="primary"
            href={"#"}
            _hover={{
              bg: "rgba(249, 87, 0, 0.1)",
              color: "primary",
              boxShadow: "sm",
              transform: "scale(1.02)",
            }}
          >
            Log out
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("primary");

  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"18px"}
                fontWeight={500}
                color={linkColor}
                borderRadius="76px"
                padding="18px 26px"
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                  bg: "hoverBg",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      color=""
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "#",
  },
  {
    label: "Holiday Packages",
    href: "#",
  },
  {
    label: "Hotel",
    href: "#",
  },
  {
    label: "Sihtseeing",
    href: "#",
  },
];
