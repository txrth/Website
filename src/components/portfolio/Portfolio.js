import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Portfolio() {

    return (
        <Box id={'portfolio'} ref={innerRef}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index} padding={"5%"}>
                       <PortfolioBlock image={project.image} buttonIcon={project.buttonIcon} buttonLabel={project.buttonLabel} 
                       text={project.text} link={project.link} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};