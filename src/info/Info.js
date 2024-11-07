import self from "../img/self.png"
import Project1 from "../img/SESoumardTwin.png"
import Project2 from "../img/Ride.jpg"
import Project3 from "../img/WesternAI.png"
import Project4 from "../img/Robotics.jpg"
import Project5 from "../img/Baja.png"
import OEC from "../img/OEC.png"
import wec from "../img/wec.png"

import swim from "../img/icons/swimming.png"
import camp from "../img/icons/camp.png"
import movies from "../img/icons/movies.jpg"
import biking from "../img/icons/biking.jpg"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Tirth",
    lastName: "Patel",
    initials: "Tirth Patel", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Mechanical Engineering Student",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👷‍♂️',
            text: 'Looking for Internship'
        },
        {
            emoji: '🌎',
            text: 'Ontario, Canada'
        },
        {
            emoji: '🎓',
            text: '3rd year'
        },
        {
            emoji: "🏫",
            text: "Western University"
        },
        {
            emoji: "📧",
            text: "4tirth.patel@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/txrth_/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/txrth",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/4tirth",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }


        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Tirth. I'm in my third year of Mechanical Engineering at Western University doing a dual degree with Computer Science. I chose to do a dual degree because I have had a strong passion for robotics and mechanical systems. Also, I realise the future is heading to a place where mechanical systems will intertwine with software. Aside from studying, I have participated several clubs and projects, such as First Robotics Competition, Model Theme Park Ride, and Western Baja, to get hands on experiences. These experiences also helped develop my skills on 3D modeling, designing, time management, and collarbrating.",
    bio2: "Starting May 2023, I want to do a Mechanical Engineering Co-op where I can get industrial experience by working on engineering projects. \nEnjoy the rest of my portfolio and thank you for your time.",
    
    skills:
    {
        proficientWith: ['Java', 'Python', 'Arduino', 'SolidWorks','Solidworks PDM', 'Autodesk Inventor', 'Onshape', 'MATLAB', "Microsoft Office Suite","Finite Element Analysis (FEA)", "LabView","C"],
        exposedTo: ['Github', 'AI','React-JS','Firebase', "3D Printing", "CNC Machining","GitHub","Linux","PLC",]
    }
    ,
    hobbies: [
        {
            label: 'Swimming',
            icon: swim
        },
        {
            label: 'Biking',
            icon: biking
        },
        {
            label: 'Movies',
            icon: movies
        },
        {
            label: 'Camping',
            icon: camp
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Western Baja Racing",
            text: "Baja is an Off-Road Racing Competition, where teams build and race a dune buggy. I have been a strong and consistent member for Baja for 3 years and have led sub-team for 2 years. During my time at Baja, I have designed and manufactured durable parts and assemblies using Design for Manufacturing (DFM) and Design for Assembly (DFA). Being a sub-team lead, I completed projects in an efficient and timely manner to ensure the car is ready for competition. Overall, my experiences with Western Baja have been amazing, fun, and have taught me a lot.",
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: Project5
        },

        {
            title: "Ontario Engineering Competition (OEC) 2023",
            text: "I was the Re-Engineering Competition Director for OEC. This role entailed planning, organizing, and managing the competition. Additionally, I wrote challenging cases thats pushed the creative limits of the best competitors of Ontario. This was an amazing experience filled with planing ahead, coming up with on the fly solutions, and functioning under stress.",
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: OEC
        },
        {
            title: "Western Engineering Competition (WEC) 2022 & 2021",
            text: "Before OEC was hosted by Western University, I was the Re-Engineering Competition Director for WEC during 2021 and 2022 years. Just like OEC, I was responsible for organizing and running the Re-Engineering Competition. Because of covid, WEC had to run online these years, which involved more problem solving and implementing creative solutions.",
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: wec
        },
        {
            title: "Western AI Project",
            text: "I joined Western AI to learn about and create AI. Using Python and a polynomial regression algorithms my team and I created an AI to predict how popularity of a Spotify song. To complete this project, creative solutions were used as there was no visible correlation in the data set. The graph above shows our final solution that has given the best correlation. The values were normalized by a factor determined by regression. This was a fun experience and I hope to do more AI projects in the future.",
            buttonLabel: "Source Code",
            buttonIcon: 'fa fa-code',
            link: "https://github.com/Western-AI/spotify",
            image: Project3
        },
        {
            title: "SE Soumard Twin Engine CAD",
            text: 'A Computer Aided Draft (CAD) model, I created of a twin piston air engine with speed control and reverse. The CAD was based on orthographic from http://jean-luc.soumard.pagesperso-orange.fr/bicylindre.en.htm. This was a challenging project, but with perseverance and probleming solving I was able to complete the a CAD assembly that enabled motion. The photo above was created by a week long rendering session.',
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: Project1
        },
        {
            title: "Theme Park Ride",
            text: "In a team of 2, we created a model of a revolutionary new ride we called Dragon Drop. The ride has 4 degrees of freedom, 3 controlled by motors and 1 freewheeling. This project integrated speaker, vex motors, servos, LEDs, and custom Arduino code. The project was one of the best projects in class and was presented in the school`s Sci-Tech Open House.",
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: Project2
        },
        {
            title: "FIRST Robotics Competition",
            text: "I was a valuable and committed member of the First Robotics Competition (FRC) team 3560, Chingbotics during my time in High School. In FRC, teams have 6 weeks to build robot, about the size of a washing machine, to accomplish tasks to compete in an alliance game. During my time in FRC, I gained value experience in designing, CAD, mechanical mechanisms, control systems, prototyping, manufacturing, and system implementation. Furthermore, being a caption, I learned about team building, training new members to be valuable assets, and managing resources.",
            buttonLabel: "",
            buttonIcon: "",
            link: "",
            image: Project4
        },
,
    ]
}