import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ArrowRightSharp } from "@mui/icons-material";
import { WHATS_APP_LINK } from "../constants";

const steps = [
  {
    title: "Find Your Ideal Mentor",
    description:
      "Browse from 600+ vested mentors and get to choose your ideal mentor according to your preferences and aspiration.",
    buttonText: "Find Your Mentor",
    buttonLink: WHATS_APP_LINK,
  },
  {
    title: "Book a FREE Trial Session",
    description:
      "Connect with mentor and see how mentor will help you achieve your goal faster & avoid asking for referrals, etc.",
    buttonText: "Book a FREE Trial",
    buttonLink: WHATS_APP_LINK,
  },
  {
    title: "Start 1:1 Long Term Mentorship",
    description:
      "Bravo!! Get started with your personalised mentorship in the right direction with a mentor of your choice.",
    buttonText: "Start Preparing",
    buttonLink: WHATS_APP_LINK,
  },
];

const MentorshipSteps = () => {
  return (
    <Container className={"py-10"}>
      <Box textAlign="center" my={4}>
        <h1 className={"font-bold text-3xl"}>Get Started in 3 Easy Steps</h1>
        <Typography variant="subtitle1">
          Follow these three simple steps to get started with Long Term
          Mentorship
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                textAlign: "center",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
                bgcolor: "background.paper",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "25%",
                  bgcolor: "primary.main",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 2,
                }}
              >
                <Typography variant="h6">{index + 1}</Typography>
              </Box>
              <Typography variant="h6" gutterBottom className={"font-bold"}>
                {step.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {step.description}
              </Typography>
              <Button
                variant="outlined"
                href={step.buttonLink}
                target={"_blank"}
                sx={{
                  marginTop: 2,
                  color: "black",
                  borderColor: "grey",
                  boxShadow: 3,
                }}
              >
                {step.buttonText}
                <ArrowRightSharp />
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MentorshipSteps;
