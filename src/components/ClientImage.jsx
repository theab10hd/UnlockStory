import React from "react";

const ClientImage = ({ src, alt }) => {
  return <img className="w-25 object-contain" src={src} alt={alt} />;
};

export default ClientImage;
