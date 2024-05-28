import "./style.css";

import {
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  PiStudentBold,
} from "react-icons/fa";

import React from "react";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {/* {socialprofils.scholar && (
          <li>
            <a href={socialprofils.scholar}>
              <FaGraduationCap />
            </a>
          </li>
        )} */}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Connect</p>
    </div>
  );
};
