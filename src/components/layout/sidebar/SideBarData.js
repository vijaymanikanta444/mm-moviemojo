import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Io5Icons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

const SideBarData = [
  // { title: "Home", path: "/", icon: <Io5Icons.IoHome /> },
  {
    title: 'Movies',
    path: '/movies',
    icon: <BiIcons.BiCameraMovie />,
    items: [
      {
        title: 'Trending',
        path: '/movies/trending',
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
        title: 'Popular',
        path: '/movies/popular',
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
    title: 'TV',
    path: '/tv',
    icon: <BsIcons.BsFillDisplayFill />,
  },
  {
    title: 'Music',
    path: '/music',
    icon: <FaIcons.FaMusic />,
  },
  {
    title: 'News',
    path: '/news',
    icon: <Io5Icons.IoNewspaperOutline />,
    items: [
      {
        title: 'Trending',
        path: '/news/trending',
        icon: <AiIcons.AiFillFire />,
      },
      {
        title: 'Popular',
        path: '/news/popular',
        icon: <AiIcons.AiFillStar />,
      },
    ],
  },

  {
    title: 'Artists',
    path: '/artists',
    icon: <MdIcons.MdPeople />,
  },
  {
    title: 'Reviews',
    path: '/reviews',
    icon: <MdIcons.MdRateReview />,
  },
  {
    title: 'Videos',
    path: '/videos',
    icon: <MdIcons.MdSlowMotionVideo />,
  },
  {
    title: 'Entertainment',
    path: '/entertainment',
    icon: <MdIcons.MdLiveTv />,
  },
];

export default SideBarData;
