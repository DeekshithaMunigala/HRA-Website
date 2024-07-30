import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WHATS_APP_LINK } from "../constants";

const WhatsAppButton = () => {
  return (
    <Fab
      aria-label="whatsapp"
      sx={{
        position: "fixed",
        bottom: "16px",
        right: "16px",
        zIndex: 1000,
        backgroundColor: "#25DE66",
        color: "#ffffff",
        "&:hover": {
          backgroundColor: "#25DE66",
        },
      }}
      href={WHATS_APP_LINK}
      target="_blank"
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppButton;
