import { Button, Container, Box, Typography, Grid } from "@mui/material";
import { BOOK_FREE_TRIAL_LINK } from "../constants";
import VerifiedIcon from "../assets/verified.png";
import { FaArrowRightLong } from "react-icons/fa6";

const styles = {
  "@keyframes shine": {
    "0%": {
      left: "-100%",
    },
    "100%": {
      left: "100%",
    },
  },
  findMentorButton: {
    position: "relative",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
      animation: "shine 2s infinite",
    },
  },
};

const MentorshipLanding = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to right, #eaf5fe, #F0F0F0, #eaf5fe)",
        padding: "30px 0 40px",
        boxSizing: "border-box",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Box textAlign="center">
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: "semi-bold",
              color: "#272727",
              fontSize: {
                xs: "36px",
                sm: "60px",
                md: "60px",
                lg: "60px",
                xl: "60px",
              },
              letterSpacing: "-3px",
            }}
          >
            Supercharge your career with
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontStyle: "italic",
              fontFamily: "instrument-seriff",
              color: "#007AFF",
              margin: "0.5rem 0 0",
              fontSize: {
                xs: "40px",
                sm: "64px",
                md: "64px",
                lg: "64px",
                xl: "64px",
              },
              letterSpacing: "-3px",
            }}
          >
            Personalized Mentorship
          </Typography>
          <Typography
            variant="body1"
            className="mt-4 mb-6"
            sx={{
              margin: "20px",
              color: "#5C5C5C",
              fontSize: { xs: "16px", sm: "17px", md: "18px", lg: "18px" },
            }}
          >
            Land your dream job, role, and company faster than ever with 1:1
            long term mentorship.
          </Typography>
          <a href={BOOK_FREE_TRIAL_LINK} target="_blank" rel="noreferrer">
            <Button
              variant="contained"
              sx={{
                margin: "20px",
                textTransform: "capitalize",
                borderRadius: "0.5rem",
                backgroundColor: "#ffffff",
                color: "#272727",
                "&:hover": {
                  backgroundColor: "#ffffff",
                },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Typography className={"px-4 py-1"}>Book a free trial</Typography>
            </Button>
          </a>
          <Button
            sx={{
              margin: "20px",
              textTransform: "capitalize",
              backgroundColor: "black",
              color: "#ffffff",
              fontWeight: 700,
              borderRadius: "0.75rem",
              "&:hover": {
                backgroundColor: "black",
              },
              ...styles.findMentorButton,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Typography className={"px-4 py-1 flex items-center"}>
              Find your mentor
              <FaArrowRightLong className="ml-2 text-white w-4" />
            </Typography>
          </Button>
        </Box>
        <Grid container spacing={2} justifyContent="center">
          {[
            "Frontend",
            "Backend",
            "Full Stack",
            "QA Testing",
            "Cloud Engineer",
            "Data Science",
            "Data Analyst",
            "UI/UX Designer",
            "Salesforce",
          ].map((category) => (
            <Grid item key={category}>
              <Button
                variant="contained"
                className="m-1 hover:text-white"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "capitalize",
                }}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            maxWidth: "100%",
            gap: 10,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={VerifiedIcon}
              className="h-5 w-5 mr-2"
              alt="verified-icon"
            />
            <Typography>No Payment Required</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={VerifiedIcon}
              className="h-5 w-5 mr-2"
              alt="verified-icon"
            />
            <Typography>Verified Mentors Only</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={VerifiedIcon}
              className="h-5 w-5 mr-2"
              alt="verified-icon"
            />
            <Typography>Reschedule Anytime</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MentorshipLanding;
