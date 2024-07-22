import { useScopedI18n } from "@/locales/client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { BaseSyntheticEvent, useState } from "react";

const handleLinkClick = (
  e: BaseSyntheticEvent,
  setActiveLink: React.Dispatch<React.SetStateAction<string>>
) => {
  const href = e.currentTarget.getAttribute("href");
  const target = href?.split("#")[1];

  if (target) {
    e.preventDefault();
    const offset = 64;
    const element = document.getElementById(target);

    if (element) {
      const scrollPosition = element.offsetTop - offset;
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }

    setActiveLink(href);
  }
};

const links = [
  {
    href: "#title",
    text: "paragraph1",
    bold: true,
    center: true,
    fontSize: 18,
  },
  {
    href: "#terms-and-meaning",
    text: "paragraph2",
    bold: true,
  },
  {
    href: "#interpretation",
    text: "paragraph3",
    ml: 2,
  },
  { href: "#definitions", text: "paragraph4", ml: 2 },
  {
    href: "#collection-and-use-of-your-personal-data",
    text: "paragraph5",
    bold: true,
  },
  {
    href: "#types-of-data-collected",
    text: "paragraph6",
    ml: 2,
  },
  {
    href: "#personal-data",
    text: "paragraph7",
    ml: 2,
  },
  {
    href: "#usage-data",
    text: "paragraph8",
    ml: 2,
  },
  {
    href: "#information-from-social-networks",
    text: "paragraph9",
    ml: 2,
  },
  {
    href: "#tracking-technologies-and-cookies",
    text: "paragraph10",
    ml: 2,
  },
  {
    href: "#using-of-data",
    text: "paragraph11",
    ml: 2,
  },
  {
    href: "#storage-of-data",
    text: "paragraph12",
    ml: 2,
  },
  {
    href: "#transfering-of-data",
    text: "paragraph13",
    ml: 2,
  },
  {
    href: "#disclosure-of-data",
    text: "paragraph14",
    bold: true,
  },
  {
    href: "#business-operations",
    text: "paragraph15",
    ml: 2,
  },
  {
    href: "#police",
    text: "paragraph16",
    ml: 2,
  },
  {
    href: "#other-legal-requirements",
    text: "paragraph17",
    ml: 2,
  },
  {
    href: "#security-of-data",
    text: "paragraph18",
    bold: true,
  },
  {
    href: "#privacy-of-children",
    text: "paragraph19",
    bold: true,
  },
  {
    href: "#links",
    text: "paragraph20",
    bold: true,
  },
  {
    href: "#update",
    text: "paragraph21",
    bold: true,
  },
  {
    href: "#contact",
    text: "paragraph22",
    bold: true,
  },
];

const PrivacyPolicyContent = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const scopedT = useScopedI18n("Legal.PrivacyPolice.content");

  return (
    <Box
      sx={{
        px: 2,
        pb: 4,
        overflow: "auto",
        maxHeight: "calc(100vh - 200px)",
      }}
    >
      {links.map(({ href, text, bold, center, fontSize, ml = 0 }) => (
        <Box
          key={href}
          component={Link}
          href={href}
          onClick={(e) => handleLinkClick(e, setActiveLink)}
          sx={{
            "&:hover": {
              color: "success.light",
            },
            color: activeLink === href ? "success.main" : "inherit",
          }}
        >
          <Typography
            align={center ? "center" : "left"}
            sx={{
              fontWeight: bold ? "bold" : "normal",
              fontSize: fontSize || 16,
              mt: 2,
              ml,
            }}
          >
            {scopedT(text as any)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PrivacyPolicyContent;
