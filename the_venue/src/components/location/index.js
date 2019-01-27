import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56053.03105939361!2d-81.45333688890278!3d28.590342253109693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77bb4b4421213%3A0x28fd8f95e049f5de!2sCamping+World+Stadium!5e0!3m2!1sen!2sus!4v1548628977005"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullscreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
