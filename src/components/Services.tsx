import {
  MagnifierIcon,
  WalletIcon,
  ChartIcon,
  LightBulbIcon,
  GiftIcon,
  PlaneIcon,
} from "./Icons";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "1-1 Mentoring",
    description: "Live 1-1 Mentoring with experts",
    icon: <WalletIcon />,
  },
  {
    title: "Career gap?",
    description: "Dont worry! We will fill that gap for you",
    icon: <LightBulbIcon />,
  },
  {
    title: "No prior experience?",
    description: "We will take care of it ",
    icon: <PlaneIcon />,
  },
  {
    title: "Expert career guidance",
    description: "Expert career guidance to help you make the right decisions",
    icon: <GiftIcon />,
  },
  {
    title: "Mock Interviews",
    description:
      "Test your knowledge and be prepared real world battles with mock interviews from industry experts",
    icon: <MagnifierIcon />,
  },
  {
    title: "Resumes",
    description:
      "Take care of your Resumes and make best resume according to jon profile and description ",
    icon: <ChartIcon />,
  },
];

export const Services = ({ reference }: any) => {
  return (
    <Container className={"py-10"} ref={reference}>
      <Box textAlign="center" my={4}>
        <h1 className={"font-bold text-3xl"}>Services</h1>
        <Typography variant="subtitle1">
          We offer different types of mentoring
        </Typography>
      </Box>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          {serviceList.map((domain) => {
            return (
              <Grid item key={domain.title}>
                <Card
                  className={"md:max-w-96 md:min-w-96"}
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
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      height={"110px"}
                      width={"360px"}
                    >
                      <Box
                        sx={{
                          borderRadius: "8px",
                          padding: "10px",
                        }}
                      >
                        {domain.icon}
                      </Box>
                      <Typography variant="subtitle1" className={"px-3 "}>
                        {domain.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Container>
  );
};
