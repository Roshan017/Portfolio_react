import React, { useState, useEffect, useRef } from "react";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "roshanprakashmathew@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Roshan017",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/el_d_iablo07/profilecard/?igsh=MXUydnhheWVmNmtnZQ==",
  },
  {
    icon: faTwitter,
    url: "https://x.com/?lang=en-in",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/roshan-mathew-841256230/",
  },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > prevScrollY.current) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={9999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map(({ icon, url }, index) => (
                <a
                  className="link"
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{}}
                >
                  <FontAwesomeIcon icon={icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects-section"
                style={{ cursor: "pointer" }}
                className="link_a"
              >
                Projects
              </a>
              <a
                href="/#contactme-section"
                style={{ cursor: "pointer" }}
                className="link_a"
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
}
