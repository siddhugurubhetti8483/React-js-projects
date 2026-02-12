import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white px-8 py-3 rounded-full text-lg hover:scale-105 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 cursor-pointer">
      {props.content}
    </button>
  );
};

export default Button;
