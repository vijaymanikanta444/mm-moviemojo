import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as Io5Icons from "react-icons/io5";
import * as BiIcons from "react-icons/bi";

const SideBarData = [
  { title: "Home", path: "/", icon: <Io5Icons.IoHome /> },
  {
    title: "Movies",
    path: "/movies",
    icon: <BiIcons.BiCameraMovie />,
    items: [
      {
        title: "Trending",
        path: "/movies/trending",
        icon: <AiIcons.AiFillFire />,
        // items: [
        //   {
        //     title: 'Reshma',
        //     path: '/movies/trending',
        //     icon: <AiIcons.AiFillFire />,
        //   },
        //   {
        //     title: 'Parmesh',
        //     path: '/movies/popular',
        //     icon: <AiIcons.AiFillStar />,
        //   },
        //   {
        //     title: 'mounika',
        //     path: '/movies/search',
        //     icon: <FaIcons.FaSearch />,
        //   },
        // ],
      },
      {
        title: "Popular",
        path: "/movies/popular",
        icon: <AiIcons.AiFillStar />,
      },
      // {
      //   title: 'Search Movies',
      //   path: '/movies/search',
      //   icon: <FaIcons.FaSearch />,
      // },
    ],
  },
  {
    title: "News",
    path: "/news",
    icon: <Io5Icons.IoNewspaperOutline />,
    items: [
      {
        title: "Trending",
        path: "/news/trending",
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: "Popular",
        path: "/news/popular",
        icon: <AiIcons.AiFillStar />,
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <AiIcons.AiFillPhone />,
  },
];

export default SideBarData;
