import MentorshipLanding from "./MentorshipLanding";
import CountUp from "react-countup";
import { Box } from "@mui/material";

export const Hero = ({ reference }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "linear-gradient(to right, #eaf5fe, #F0F0F0, #eaf5fe)",
        padding: "40px 0",
      }}
    >
      <div ref={reference}>
        <MentorshipLanding />
        <Box className="bg-gradient-to-b text-center flex justify-center p-4 pt-10 rounded-xl from-[#eaf5fe] via-[#FFFFFF] to-[#eaf5fe] w-[100%] m-auto my-4 min-h-40">
          <div className="w-[85%]">
            <div className="flex  md:hidden flex-col justify-center p-6 ">
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4 "}>
                <h2 className={"font-bold text-5xl"}>
                  <CountUp start={0} end={4.8} decimals={1} duration={2} /> / 5
                </h2>
                <h2>From 1000+ Mentee reviews</h2>
              </div>
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4"}>
                <h2 className={"font-bold text-4xl"}>
                  <CountUp start={0} end={100} duration={2} /> Million +
                </h2>
                <h2>Total minutes mentored</h2>
              </div>
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4"}>
                <h2 className={"font-bold text-5xl"}>
                  <CountUp start={0} end={21360} duration={2} />+
                </h2>
                <h2>Satisfied Mentees</h2>
              </div>
            </div>
            <div className="hidden md:flex flex-row justify-around items-center h-full">
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4"}>
                <h2 className={"font-bold text-5xl"}>
                  <CountUp start={0} end={4.8} decimals={1} duration={2} /> / 5
                </h2>
                <h2>From 1000+ Mentee reviews</h2>
              </div>
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4"}>
                <h2 className={"font-bold text-4xl"}>
                  <CountUp start={0} end={100} duration={2} /> Million+
                </h2>
                <h2>Total minutes mentored</h2>
              </div>
              <div className={"text-center  p-4 shadow-lg bg-gray-100 mb-4"}>
                <h2 className={"font-bold text-5xl"}>
                  <CountUp start={0} end={21360} duration={2} />+
                </h2>
                <h2>Satisfied Mentees</h2>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </Box>
  );
};
