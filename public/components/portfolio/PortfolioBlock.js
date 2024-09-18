import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
   const { image, buttonIcon, buttonLabel, text, link, title } = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} borderRadius={'1rem'} />
         <h1 style={{ fontSize: '2rem' }}>{title}</h1>

         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
            alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>

            <Box p={1} borderRadius={'25px'}>
               {text}
            </Box>
            {buttonLabel.length > 0 &&
               <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                  <IconLink link={link} title={buttonLabel} icon={buttonIcon} />
                  {/*<IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>*/}
               </Box>
            }


         </Box>
      </Box>
   );
}

export default PortfolioBlock;