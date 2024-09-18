import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";



export default function About() {
    const firstName = info.firstName

    function aboutMeText() {
        return <>

            <Box textAlign={'center'} style={{fontSize: "2.5rem", fontWeight: "bold", padding:'2%', paddingBottom:'0%' }}>
            <span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}> About {firstName} </span>
            
            </Box>
            <Box textAlign={'justify'} padding={"2%"} color={'black'} fontSize={ "1.5rem"} style={{ color: '#e8e8e8'}}>

                {info.bio}
            </Box>

            <Box textAlign={'center'}  padding={"2%"} paddingTop={"0%"} color={'black'} fontSize={ "1.5rem"} style={{ color: '#e8e8e8'}}>

                {info.bio2}
            </Box>
        </>;
    }

    function skillsText() {
        return <>
  <Box textAlign={'center'} style={{fontSize: "2.5rem", fontWeight: "bold", padding:'2%', paddingBottom:'0%' }}>
<span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Qualifications</span>
                         
            </Box>
            <Box padding={"3%"} >
                <p style={{ color: "#e8e8e8", fontWeight: "bold" }}> Proficient With:</p>
                <ul className={Style.skills} >
                    {info.skills.proficientWith.map((proficiency, index) => <li key={index} style={{ color: '#e8e8e8' }}><Box display={"flex"}> <Box width={25} /> ❖ {proficiency}</Box></li>)}
                </ul>
                <p style={{ color: "#e8e8e8", fontWeight: "bold" }}> Exposed To:</p>
                <ul className={Style.skills}>
                    {info.skills.exposedTo.map((skill, index) => <li key={index} style={{ color: '#e8e8e8' }}><Box display={"flex"}> <Box width={25} /> ❖ {skill}</Box></li>)}
                </ul>
            </Box>
        </>;
    }

    function miscText() {
        return <>
<Box textAlign={'center'} style={{fontSize: "2.5rem", fontWeight: "bold", padding:'2%', paddingBottom:'0%' }}>
<span style={{background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Hobbies/Interests</span>
                
                </Box>
            <Box padding={"3%"} >
                <Grid container display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'}> 
                <ul className={Style.skills}>
                    {info.hobbies.map((hobby, index) =>(
                        <Grid container spacing={1} key={index} padding={'5%'}>
                            <item>  
                            <li key={index} style={{ color: '#e8e8e8' }}>
                                <Box display="flex" width={"150%"} sx={{ border: 1, borderColor: '#000000' }}>
                                        <img src={hobby.icon} height={"50rem"}></img>
                                        <Box padding={"4%"}>{hobby.label}</Box>
                                </Box>
                            </li>
                            </item>
                        </Grid>      
                    ))} 
                    </ul>
                </Grid>
                
{/*    
<Box width={25}></Box>
<Box width={50} height={75}></Box>
className={Style.skills}>
<Box component={'span'} mr={'1rem'} left={50} alignContent={"stretch"} display="flex">
style={{ flex: 1, justifyContent: 'center', alignItems: "center", lineHeight: "50px" }}
<li key={index} style={{ color: "#e8e8e8" }}>       
 <img src={hobby.icon} height={"50rem"}></img>
                                
                                <Box>
                                    {hobby.label}
                                </Box>
*/}

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