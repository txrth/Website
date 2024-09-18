import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { info } from "../../info/Info";

import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const { text } = props;
   const heightOftext = props.clientHeight;

   return (
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
         width={{ xs: '8S0%', md: '70%' }}  mb={'4rem'}>
         <Box style={{background: info.gradient}} borderRadius={'.5rem'} fontSize={'1.5rem'} fontFamily={'arial'}> {/*#ededd6*/}

            <Box component={'top'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>
               <Box style={{ width: '25%', color:'black' }} textAlign={'center'}>
                  A
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%' , color:'black'}} textAlign={'center'}>
                  B
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%' , color:'black'}} textAlign={'center'}>
                  C
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%' , color:'black'}} textAlign={'center'}>
                  D
               </Box>
            </Box>

            <Box component={'mid'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>

               <Box component={'Lside'} style={{ width: '5%', color:'black' }} height={heightOftext} >

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'}>
                     <Box>1</Box>
                  </Box>

                  <Box sx={{ borderTop: 1, borderColor: '#000000' }} alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'}>
                     <Box>2</Box>
                  </Box>

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'} sx={{ borderTop: 1, borderColor: '#000000' }}>
                     <Box>3</Box>
                  </Box>

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'} sx={{ borderTop: 1, borderColor: '#000000' }}>
                     <Box>4</Box>
                  </Box>
               </Box>

               <Box width={{ md: '90%' }} sx={{ color: 'white', border: 2,borderRadius:'.25rem', borderColor: "#000000", background:"#1f1f1f" }}>
                  {text}
               </Box>

               <Box component={'Rside'} style={{ width: '5%', color:'black' }} height={heightOftext} >

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'}>
                     <Box>1</Box>
                  </Box>

                  <Box sx={{ borderTop: 1, borderColor: '#000000' }} alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'}>
                     <Box>2</Box>
                  </Box>

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'} sx={{ borderTop: 1, borderColor: '#000000' }}>
                     <Box>3</Box>
                  </Box>

                  <Box alignItems={'center'}
                     justifyContent={'center'} height={'25%'} display={'flex'} sx={{ borderTop: 1, borderColor: '#000000' }}>
                     <Box>4</Box>
                  </Box>
               </Box> 

            </Box>

            <Box component={'bottom'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>
               <Box style={{ width: '25%', color:'black' }} textAlign={'center'}>
                  A
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%', color:'black' }} textAlign={'center'}>
                  B
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%', color:'black' }} textAlign={'center'}>
                  C
               </Box>
               <Box sx={{ borderLeft: 1, borderColor: '#000000' }} style={{ width: '25%', color:'black' }} textAlign={'center'}>
                  D
               </Box>
            </Box>

         </Box>

      </Box>
   );
}

export default Terminal;