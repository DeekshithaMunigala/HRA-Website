import React from "react";
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
  BarChart,
  ComputerIcon,
  DatabaseIcon,
  FolderIcon,
  IndianRupee,
  LineChart,
  Palette,
  PieChart,
  Settings,
  Settings2Icon,
  Target,
} from "lucide-react";

export const About = ({ reference }: any) => {
  const domains = [
    {
      name: "Frontend Developer",
      icon: <ComputerIcon />,
      color: "purple",
    },
    {
      name: "Backend Developer",
      icon: <DatabaseIcon />,
      color: "purple",
    },
    {
      name: "Fullstack Developer",
      icon: <FolderIcon />,
      color: "purple",
    },
    {
      name: "QA Testing",
      icon: <ComputerIcon />,
      color: "purple",
    },
    {
      name: "Data analyst",
      icon: <BarChart />,
      color: "orange",
    },
    {
      name: "Data engineer",
      icon: <Settings2Icon />,
      color: "orange",
    },
    {
      name: "Data Scientist",
      icon: <Settings />,
      color: "orange",
    },
    {
      name: "Marketing",
      icon: <Target />,
      color: "green",
    },
    {
      name: "Salesforce",
      icon: <LineChart />,
      color: "green",
    },
    {
      name: "Business Analyst",
      icon: <PieChart />,
      color: "green",
    },
    {
      name: "Finance",
      icon: <IndianRupee />,
      color: "blue",
    },
    {
      name: "UI/UX Designer",
      icon: <Palette />,
      color: "red",
    },
  ];

  return (
    <div className={"text-center"} ref={reference}>
      <div className={"my-10"}>
        <h1 className={"font-bold text-3xl"}>
          We cover almost every domain in the software industry
        </h1>
        <Typography variant="subtitle1">
          Our mentors are equipped to guide you in any field you're passionate
          about
        </Typography>
      </div>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {domains.map((domain) => {
            return (
              <Grid item key={domain.name}>
                <Card
                  sx={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    minWidth: "300px",
                    textAlign: "center",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  <CardContent>
                    <Stack flexDirection={"row"} alignItems={"center"}>
                      <Box
                        sx={{
                          border: `1px solid ${domain.color}`,
                          borderRadius: "8px",
                          padding: "10px",
                          color: domain.color,
                        }}
                      >
                        {domain.icon}
                      </Box>
                      <Typography variant="subtitle1" className={"px-3"}>
                        {domain.name}
                      </Typography>
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
