import React from "react";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;
