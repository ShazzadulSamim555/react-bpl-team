const Header = ({ onClaimCredit }) => {
  return (
    <div className="text-center relative w-full mx-auto">
      <img
        className="w-full h-auto max-h-[600px] object-cover rounded-lg"
        src="/src/assets/bg-shadow.png"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 px-4 md:px-10 lg:px-20">
        <img
          className="w-32 md:w-48 lg:w-56"
          src="/src/assets/banner-main.png"
          alt="Main Banner"
        />
        <h2 className="text-xl md:text-4xl font-bold leading-snug">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-sm md:text-base">Play Ground</p>
        <button
          onClick={onClaimCredit}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-green-500 hover:text-white transition"
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Header;
