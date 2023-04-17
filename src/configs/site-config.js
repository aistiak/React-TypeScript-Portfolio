import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Istiak Arif. All Rights Reserved.`,
  author: {
    name: "Istiak Arif",
    accounts: [
      {
        url: "https://github.com/aistiak",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://twitter.com/@AR_Istiak",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaTwitter />
      },
      {
        url: "https://dev.to/istiak",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/Ariful-Islam-Istiak",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      // {
      //   url: "https://www.quora.com/profile/Muhammad-Ahmad-66",
      //   label: "Quora Account",
      //   type: "red",
      //   icon: <FaQuora />
      // },
      {
        url: "mailto:dev.istiak@gmail.com",
        label: "Mail ahmad",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
