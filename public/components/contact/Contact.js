import React from 'react';
import { Box } from "@mui/material";
import me2 from '../../img/Self2.jpg';
import { info } from "../../info/Info";

import insta from "../../img/icons/Instagram.png";
import git from "../../img/icons/git.png";
import linkedin from "../../img/icons/linked.png";
import email from "../../img/icons/Gmail.png";

export default function Contact() {

   const contacts = [
      {
         icon: insta,
         link: info.socials[0].link.substring(12),
         url: info.socials[0].link,
      },
      {
         icon: linkedin,
         link: info.socials[2].link.substring(12),
         url: info.socials[2].link,
      }, {
         icon: git, link: info.socials[1].link.substring(8), url: info.socials[1].link,
      }, {
         icon: email, link: "4tirth.patel@gmail.com", url: "mailto:4tirth.patel@gmail.com"
      }
   ]

   return (
      <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
         minHeight={'calc(100vh - 175px)'} justifyContent={'center'} paddingTop={"3%"}>
         <Box width={"70%"} minHeight={'calc(50vh - 125px)'} borderRadius={'3rem'} display={"flex"}>
            <Box width={"50%"} component={'img'} src={me2} alt={'mockup'} style={{ borderTopLeftRadius: '3rem', borderBottomLeftRadius: '3rem' }} />

            <Box style={{ borderTopRightRadius: '3rem', borderBottomRightRadius: '3rem', background: info.gradient }}
               width={"50%"} alignContent={"center"}>
               <Box height={'20%'} />
               
               {contacts.map((media) =>
                  <a target="_blank" href={media.url}>
                     <Box component={'span'} mr={'1rem'} alignItems={'center'} display="flex" height={'15%'}>
                        <Box width={"10%"}></Box>
                        <img src={media.icon} height={"50rem"} />
                        <Box width={'5%'}></Box>
                        <box style={{ flex: 1, justifyContent: 'center', alignItems: "center", lineHeight: "50px", fontSize: 25 }}>
                           {media.link}
                        </box>
                     </Box>
                  </a>
               )}
               
            </Box>
         </Box>
      </Box>
   )
}