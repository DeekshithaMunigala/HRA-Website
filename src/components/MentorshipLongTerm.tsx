import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  Video,
  Mail,
  Files,
  Clock,
  Rocket,
  BadgeCheckIcon,
} from "lucide-react";

const MentorshipLongTerm = () => {
  const domains = [
    {
      icon: <Video />,
      name: "1:1 Live Session",
      text: "Never question your progress with frequent One on One session.",
      color: "orange",
    },
    {
      icon: <Mail />,
      name: "Unlimited Chat with Mentor",
      text: "Doubt? Get the right advice from your mentor via Chat",
      color: "orange",
    },
    {
      icon: <Files />,
      name: "Task & Curated Resources",
      text: "Yes! You will be certified for this mentorship program.",
      color: "orange",
    },
    {
      icon: <Clock />,
      name: "Regular Followups",
      text: "Stay motivated and consistent with regular follow- ups.",
      color: "orange",
    },
    {
      icon: <Rocket />,
      name: "Job Referrals",
      text: "Get Referrals from mentor community to top product and service based companies.",
      color: "orange",
    },
    {
      icon: <BadgeCheckIcon />,
      name: "Certified",
      text: "Yes! You will be certified for this mentorship program.",
      color: "orange",
    },
  ];

  return (
    <div className="text-center">
      <div className="my-10">
        <h1 className={"font-bold text-3xl"}>
          No need to Struggle Alone Anymore
        </h1>
        <Typography variant="subtitle1">
          Long term mentorship gets fully covered
        </Typography>
      </div>

      <Container>
        <Grid container spacing={3} justifyContent="center">
          {domains.map((domain) => {
            return (
              <Grid item key={domain.name}>
                <Card
                  className="h-[180px] w-[330px] sm:w-[300px] lg:w-[350px] xs:w-[280px]"
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    textAlign: "center",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardContent>
                    <Stack flexDirection={"column"} alignItems={"start"}>
                      <Box
                        sx={{
                          padding: "10px",
                          color: domain.color,
                        }}
                      >
                        {domain.icon}
                      </Box>
                      <h1 className="px-3 font-bold">{domain.name}</h1>
                      <p className="px-3 text-left text-gray-600">
                        {domain.text}
                      </p>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default MentorshipLongTerm;
