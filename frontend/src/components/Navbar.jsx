import React from "react";

function Navbar() {
  return (
    <nav>
      <div class="navbartext">
        <a href="#top" class="navnum">
          01. <span class="navname">welcome </span>
        </a>
        <a href="#about" class="navnum">
          02. <span class="navname">about </span>
        </a>
        <a href="#projects" class="navnum">
          03. <span class="navname">projects </span>
        </a>
        <a href="#sus" class="navnum">
          04. <span class="navname">SUS </span>
        </a>
        <a href="#contact" class="navnum">
          05. <span class="navname">contact </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
