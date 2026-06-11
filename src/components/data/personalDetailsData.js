import { FaDumbbell, FaTrophy } from "react-icons/fa";
import {FaArrowTrendUp, FaCircleInfo } from "react-icons/fa6";


const fullDetails = {

 details : [

    {
        id:1,
        icon:"",
        title: "Squats",
        icon: FaTrophy,
        value1: "120",
        unit: "kg",
        icon2: FaArrowTrendUp,
        value2: "+ 2.5KG"

    },

     {
        id:2,
        icon:"",
        title: "Bench press",
        icon: FaTrophy,
        value1: "120",
        unit: "kg",
        icon2: FaArrowTrendUp,
        value2: "+ 2.5KG"

    },

     {
        id:3,
        title: "Overhead",
        icon: FaTrophy,
        value1: "40",
        unit: "kg",
        icon2: FaArrowTrendUp,
        value2: "+ 2.5KG"

    },

     {
        id:4,
        title: "Squats",
        icon: FaTrophy,
        value1: "24",
        unit: "kg",
        icon2: FaArrowTrendUp,
        value2: "+ 3.2KG"

    },

],

     bodyComp : [

    {
        id:5,
        title: "Squats",
        icon: FaTrophy,
        value1: "78.4",
        unit: "kg",
        icon2: FaArrowTrendUp,
        value2: "- 1.2KG this month"

    },

],

 activeGoals:[

    {
         id : 6,
         title: "Run 50km this month",
         value: "14days",
         icon: FaCircleInfo,
         progress: "32 / 50 km",
         progressPercentage:"64%", 
       },
       

       {
        id:7,
        title: "Run 50km this month",
        value: "14days",
        icon: FaDumbbell,
        progress: "32 / 50 km",
        progressPercentage:"64%", 
       },

       {
        id:8,
        title: "Run 50km this month",
        value: "14days",
        icon: FaArrowTrendUp,
        progress: "32 / 50 km",
        progressPercentage:"64%", 
       }
 ]
}

export default fullDetails 