import React, { useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  arrows: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToScroll: 2,
  className: "center",
  centerPadding: "60px",
  centerMode: true,

  slidesToShow: 1,
};

const BannerCarousels = () => {
  const [slider, setSlider] = useState(null);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      title: "Design Projects 1",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/assets/images/banners/banner.png",
    },
    {
      title: "Design Projects 2",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/assets/images/banners/banner.png",
    },
    {
      title: "Design Projects 3",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/assets/images/banners/banner.png",
    },
  ];

  return (
    <Box
      position={"relative"}
      mx="auto"
      my="30px"
      borderRadius={"15px"}
      height={"600px"}
      width={"98%"}
      overflow={"hidden"}
    >
      {/* Left Icon */}
      <IconButton
        bg="#f9570070"
        color={"#fff"}
        borderRadius={"30px"}
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        bg="#f9570070"
        color={"#fff"}
        borderRadius={"30px"}
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            maxW={"100%"}
            //backgroundImage={`url(${card.image})`}
          >
            <Image
              width={"98%"}
              mx="auto"
              height={"500px"}
              backgroundSize="cover"
              src={card.image}
              alt="Banner"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannerCarousels;
