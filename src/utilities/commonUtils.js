import Home from "../PortfolioContainer/Home/Home";
import AboutMe from "../PortfolioContainer/AboutMe/AboutMe"
import Resume from "../PortfolioContainer/Resume/Resume";
import Testimonial from "../PortfolioContainer/Testimonial/Testimonial";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Blogs from "../PortfolioContainer/Blogs/Blogs";
import './commonUtils.css';

export const TOTAL_SCREENS=[
    {
        screen_name:"Home",
        component: Home,
    },
    {
        screen_name:"AboutMe",
        component: AboutMe,
    },
    {
        screen_name:"Resume",
        component: Resume,
    },
    {
        screen_name:"Testimonial",
        component: Testimonial,
    },
    {
        screen_name:"ContactMe",
        component: ContactMe,
    },
    {
        screen_name: <a href="https://codetalktech.blogspot.com/" target="_blank" rel="noopener noreferrer" class="unstyled-link">My Blogs</a> ,
        component: Blogs,
    }
];

export const GET_SCREEN_INDEX=(screen_name)=>{
    if(!screen_name) return -1
    for(let i=0;i<TOTAL_SCREENS.length;i++){
        if(TOTAL_SCREENS[i].screen_name===screen_name) return i;
    }
    return -1;
}