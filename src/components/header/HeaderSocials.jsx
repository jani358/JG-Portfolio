import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials fa-3x" >
      <a href="https://www.linkedin.com/in/janindu-gayanga-02ba60217/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/jani358" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/JaninduGayanga" target="_blank" rel="noreferrer" ><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials