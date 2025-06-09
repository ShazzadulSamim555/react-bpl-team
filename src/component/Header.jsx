
const Header = () => {
    return (
        <div>
            <div>
                <div className="text-center relative w-full mx-auto">
  {/* Background Image */}
  <img
    className="w-full h-auto max-h-[600px] object-cover rounded-lg"
    src="/src/assets/bg-shadow.png"
    alt="Background"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

  {/* Centered Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-3 px-4 md:px-10 lg:px-20">
    <img
      className="w-32 md:w-48 lg:w-56"
      src="/src/assets/banner-main.png"
      alt="Main Banner"
    />
    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-[90%] md:max-w-2xl">
      Assemble Your Ultimate Dream 11 Cricket Team
    </h2>
    <p className="text-sm md:text-base">Play Ground</p>
    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition">
      Claim Free Credit
    </button>
  </div>
</div>

            </div>
        </div>
    );
};

export default Header;