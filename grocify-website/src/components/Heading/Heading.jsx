// import React from "react";

// const Heading = ({ highlight, Heading }) => {
//   return (
//     <div className="w-fit mx-auto text-center my-6 md:my-8">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
//         <span className="text-orange-500">{highlight}</span> {Heading}
//       </h2>
//       <div className="w-18 sm:w-24 md:w-34 h-1 bg-orange-300  mt-3 ml-auto"></div>
//     </div>
//   );
// };

// export default Heading;

const Heading = ({ highlight, Heading }) => {
  return (
    <div className="w-fit mx-auto text-center mb-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        <span className="text-orange-500">{highlight}</span> {Heading}
      </h2>

      <div className="w-16 sm:w-20 md:w-28 h-1 bg-orange-300 mt-2 ml-auto"></div>
    </div>
  );
};

export default Heading;
