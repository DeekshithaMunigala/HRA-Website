import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Flex } from "@radix-ui/themes";
import { Button } from "./ui/button";
import { Phone as PhoneIcon, Mail as MailIcon } from "@mui/icons-material";
import { WhatsappIcon } from "./Icons";
import "./Styles.css";

export const ContactUs = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="md:flex gap-4">
      <Button onClick={handleClickOpen}>
        <PhoneIcon className="mr-2 w-5 h-5" />
        Talk to us
      </Button>
      <Dialog open={open} onClose={handleClose} disableScrollLock={true}>
        <DialogTitle>Contact us</DialogTitle>
        <DialogContent>
          <Flex direction="column" gap="3">
            <a href="tel:+917569922967" className="w-4/5">
              <Button
                variant="link"
                className="bg-cyan-300 text-white rounded-xl contact-button"
              >
                <Flex direction="row" gap="3" className="text-black">
                  <PhoneIcon /> +91 7569922967
                </Flex>
              </Button>
            </a>

            <a href="mailto:support@solutions.in">
              <Button
                variant="link"
                className="bg-yellow-700 text-white rounded-xl contact-button"
              >
                <Flex direction="row" gap="3">
                  <MailIcon /> support@hrasolutions.in
                </Flex>
              </Button>
            </a>
            <a target="_blank" rel="noreferrer" href="https://wa.link/quiehb">
              <Button
                variant="link"
                className="bg-green-200 rounded-xl contact-button"
              >
                <Flex direction="row" gap="3">
                  <WhatsappIcon /> +91 89776 61744
                </Flex>
              </Button>
            </a>
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
