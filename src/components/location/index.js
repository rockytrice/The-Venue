import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.0064689775145!2d-82.36662848493164!3d27.993698482674134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cf33b37124d9%3A0x5899aab9c5289b5d!2sMIDFLORIDA+Credit+Union+Amphitheatre!5e0!3m2!1sen!2sus!4v1553185372753"
        title="location"
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
