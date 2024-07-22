import { useScopedI18n } from "@/locales/client";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  const scopedT = useScopedI18n("Legal.PrivacyPolice.main");

  const paragraphs = [
    { id: "title", variant: "h5", fontWeight: "bold", key: "title" },
    { key: "paragraph1" },
    { key: "paragraph2" },
    {
      id: "terms-and-meaning",
      variant: "h6",
      fontWeight: "bold",
      key: "paragraph3",
    },
    { id: "interpretation", fontWeight: "bold", key: "paragraph4" },
    { key: "paragraph5" },
    { id: "definitions", fontWeight: "bold", key: "paragraph6" },
    { key: "paragraph7" },
    { ml: 2, key: "paragraph8" },
    { ml: 2, key: "paragraph9" },
    { ml: 2, key: "paragraph10" },
    { ml: 2, key: "paragraph11" },
    { ml: 2, key: "paragraph12" },
    { ml: 2, key: "paragraph13" },
    { ml: 2, key: "paragraph14" },
    { ml: 2, key: "paragraph15" },
    { ml: 2, key: "paragraph16" },
    { ml: 2, key: "paragraph17" },
    { ml: 2, key: "paragraph18" },
    { ml: 2, key: "paragraph19" },
    {
      id: "collection-and-use-of-your-personal-data",
      variant: "h6",
      fontWeight: "bold",
      key: "paragraph20",
    },
    { id: "types-of-data-collected", fontWeight: "bold", key: "paragraph21" },
    { id: "personal-data", fontWeight: "bold", key: "paragraph22" },
    { key: "paragraph23" },
    { ml: 2, key: "paragraph24" },
    { ml: 2, key: "paragraph25" },
    { ml: 2, key: "paragraph26" },
    { ml: 2, key: "paragraph27" },
    { id: "usage-data", fontWeight: "bold", key: "paragraph28" },
    { key: "paragraph29" },
    { key: "paragraph30" },
    { key: "paragraph31" },
    { key: "paragraph32" },
    {
      id: "information-from-social-networks",
      fontWeight: "bold",
      key: "paragraph33",
    },
    { key: "paragraph34" },
    { ml: 2, key: "paragraph35" },
    { ml: 2, key: "paragraph36" },
    { ml: 2, key: "paragraph37" },
    { ml: 2, key: "paragraph38" },
    { key: "paragraph39" },
    { key: "paragraph40" },
    {
      id: "tracking-technologies-and-cookies",
      fontWeight: "bold",
      key: "paragraph41",
    },
    { key: "paragraph42" },
    { ml: 2, key: "paragraph43" },
    { ml: 2, key: "paragraph44" },
    { ml: 2, key: "paragraph45" },
    { key: "paragraph46" },
    { key: "paragraph47" },
    { key: "paragraph48" },
    { key: "paragraph49" },
    { ml: 2, key: "paragraph50" },
    { ml: 2, key: "paragraph51" },
    { ml: 2, key: "paragraph52" },
    { ml: 2, key: "paragraph53" },
    { ml: 2, key: "paragraph54" },
    { key: "paragraph55" },
    { key: "paragraph56" },
    { ml: 2, key: "paragraph57" },
    { ml: 2, key: "paragraph58" },
    { key: "paragraph59" },
    { ml: 2, key: "paragraph60" },
    { ml: 2, key: "paragraph61" },
    { ml: 2, key: "paragraph62" },
    { key: "paragraph63" },
    { id: "using-of-data", fontWeight: "bold", key: "paragraph64" },

    { key: "paragraph65" },
    { ml: 2, key: "paragraph66" },
    { ml: 2, key: "paragraph67" },
    { ml: 2, key: "paragraph68" },
    { ml: 2, key: "paragraph69" },
    { ml: 2, key: "paragraph70" },
    { ml: 2, key: "paragraph71" },
    { ml: 2, key: "paragraph72" },
    { ml: 2, key: "paragraph73" },
    { key: "paragraph74" },
    { ml: 2, key: "paragraph75" },
    { ml: 2, key: "paragraph76" },
    { ml: 2, key: "paragraph77" },
    { ml: 2, key: "paragraph78" },
    { ml: 2, key: "paragraph79" },
    { ml: 2, key: "paragraph80" },
    { id: "storage-of-data", fontWeight: "bold", key: "paragraph81" },
    { key: "paragraph82" },
    { key: "paragraph83" },
    { id: "transfering-of-data", fontWeight: "bold", key: "paragraph84" },
    { key: "paragraph85" },
    { key: "paragraph86" },
    { key: "paragraph87" },
    { id: "disclosure-of-data", fontWeight: "bold", key: "paragraph88" },
    { id: "business-operations", fontWeight: "bold", key: "paragraph89" },
    { key: "paragraph90" },
    { id: "police", fontWeight: "bold", key: "paragraph91" },
    { key: "paragraph92" },
    { id: "other-legal-requirements", fontWeight: "bold", key: "paragraph93" },
    { key: "paragraph94" },
    { ml: 2, key: "paragraph95" },
    { ml: 2, key: "paragraph96" },
    { ml: 2, key: "paragraph97" },
    { ml: 2, key: "paragraph98" },
    { ml: 2, key: "paragraph99" },
    { id: "security-of-data", fontWeight: "bold", key: "paragraph100" },
    { key: "paragraph101" },
    { id: "privacy-of-children", fontWeight: "bold", key: "paragraph102" },
    { key: "paragraph103" },
    { key: "paragraph104" },
    { id: "links", fontWeight: "bold", key: "paragraph105" },
    { key: "paragraph106" },
    { key: "paragraph107" },
    { id: "update", fontWeight: "bold", key: "paragraph108" },
    { key: "paragraph109" },
    { key: "paragraph110" },
    { key: "paragraph111" },
    { fontWeight: "bold", key: "paragraph112" },
    { id: "contact", key: "paragraph113" },
  ];

  return (
    <Box sx={{ pt: 10 }}>
      {paragraphs.map((paragraph: any) => (
        <Typography
          key={paragraph.key}
          id={paragraph.id}
          variant={paragraph.variant}
          sx={{ fontWeight: paragraph.fontWeight, ml: paragraph.ml }}
          paragraph
        >
          {scopedT(paragraph.key)}
        </Typography>
      ))}
    </Box>
  );
};

export default PrivacyPolicy;
