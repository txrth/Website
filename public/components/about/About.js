import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";



export default function About() {
    const firstName = info.firstName

    function aboutMeText() {
        return <>
            <Box display={'Flex'}>
                <Box sx={{ borderRight: 2, borderBottom: 2, borderColor: '#000000', fontSize: "2rem" }} 
                 style={{ color: 'black', fontWeight: "bold", paddingLeft: "5%", paddingRight: "5%" }} >
                    About {firstName}
                </Box>
            </Box>

            <Box padding={"2%"} color={'black'}>
                {info.bio}
            </Box>
        </>;
    }

    function skillsText() {
        return <>
            <Box display={'Flex'}>
                <Box sx={{ borderRight: 2, borderBottom: 2, borderColor: '#000000' }}
                    style={{ color: '#000000', fontWeight: "bold", fontSize: "2rem", paddingLeft: "5%", paddingRight: "5%" }}>
                    Qualifications
                </Box>
            </Box>
            <Box padding={"3%"} >
                <p style={{ color: "#000000", fontWeight: "bold" }}> Proficient With:</p>
                <ul className={Style.skills} >
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index} style={{ color: 'black' }}><Box display={"flex"}> <Box width={25} /> ❖ {proficiency}</Box></li>)}
                </ul>
                <p style={{ color: "#000000", fontWeight: "bold" }}> Exposed To:</p>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index} style={{ color: 'black' }}><Box display={"flex"}> <Box width={25} /> ❖ {skill}</Box></li>)}
                </ul>
            </Box>
        </>;
    }

    function miscText() {
        return <>
        <Box display={'Flex'}>
            <Box sx={{ borderRight: 2, borderBottom: 2, borderColor: '#000000' }} 
                style={{ color: '#000000', fontWeight: "bold", fontSize: "2rem", paddingLeft: "5%", paddingRight:"5%" }} 
                >
                Hobbies/Interests</Box>
                </Box>
            <Box padding={"3%"}>
                <ul className={Style.skills}>
                    {info.hobbies.map((hobby, index) =>
                        <li key={index} style={{ color: "black" }}>
                            <Box component={'span'} mr={'1rem'} left={50} alignContent={"stretch"} display="flex">
                                <Box width={50} height={75}></Box>
                                <img src={hobby.icon} height={"50rem"} />
                                <Box width={25}></Box>
                                <box style={{ flex: 1, justifyContent: 'center', alignItems: "center", lineHeight: "50px" }}>
                                    {hobby.label}
                                </box>
                            </Box>
                        </li>
                    )}
                </ul>
            </Box>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} />
            <Terminal text={skillsText()} />
            <Terminal text={miscText()} />
        </Box>
    )
}