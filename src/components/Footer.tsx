import React from "react";
import {Stack, Link} from "@mui/material";
import {INSTA_URL, LINKEDIN_URL} from "../constants";
import hra_small from "../assets/hra_small.jpeg"
import {InstaColorIcon, LinkedinColorIcon} from "./Icons";
import './Styles.css'

export const Footer = () => {
    return (
        <footer id="footer">
            <hr className="w-11/12 mx-auto"/>

            <section className="container py-10 gap-x-2 gap-y-8 flex">
                <div className="col-span-full xl:col-span-2 flex-auto">
                    <a href="/" className="flex">
                        <Stack>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                <img src={hra_small} style={{width: "25px", height: "25px"}} alt="SkillLeap logo"/>
                                <h3 className="text-[#67c656] text-xl px-2 font-serif">
                                    HRA
                                </h3>
                                <h3 className="text-black text-xl font-serif">
                                    SOLUTIONS
                                </h3>
                            </Stack>
                            <span className={"text-gray-400 text-xs"}>
                            Get started by booking a free trial session with the mentor of your choice
                            </span>
                        </Stack>
                    </a>
                </div>
                <div className={"flex flex-row"}>
                    <Link href={LINKEDIN_URL} target={'_blank'}>
                        <LinkedinColorIcon/>
                    </Link>
                    <Link href={INSTA_URL} target={'_blank'}>
                        <InstaColorIcon/>
                    </Link>
                </div>
            </section>
        </footer>
    );
};
