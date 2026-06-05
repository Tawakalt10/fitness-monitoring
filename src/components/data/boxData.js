import { FaLightbulb, FaMoon } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

 const gymInfo = [
   {
    id : 1,
    icon:"",
    title: "Sleep",
    value: "7h 42m",
    subtitle: "Deep · 1h 50m",
    icon: FaMoon,
    progress: 80
  },

  {
    id : 2,
    title: "Hydration",
    value: "1.8L",
    subtitle: "Goal ·  2.5L",
    icon: FaLightbulb,
    progress: 80
  },

  {
    id : 3,
    title: "Steps",
    value: "8,340",
    subtitle: "6.2KM today",
    icon: FaLightbulb,
    progress: 60
  },

  {
    id : 4,
    title: "Streak",
    value: "14days",
    subtitle: "Personalbest",
    icon: FaMagnifyingGlass,
    progress: 100
  },
  
]

export default gymInfo