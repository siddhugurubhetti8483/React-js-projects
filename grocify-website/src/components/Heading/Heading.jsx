const Heading = ({ highlight, heading }) => {
  return (
    <div className="w-fit mx-auto text-center mb-6">
      <h2 className="text-zinc-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
        <span className="text-orange-500">{highlight}</span> {heading}
      </h2>

      <div className="w-16 sm:w-20 md:w-28 h-1 bg-orange-300 mt-2 ml-auto"></div>
    </div>
  );
};

export default Heading;
