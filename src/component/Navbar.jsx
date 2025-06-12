const Navbar = ({ balance }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <img src="/src/assets/logo.png" alt="Logo" className="h-12" />
        </div>
        <div className="flex gap-4 items-center text-black font-semibold">
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedule</a>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded">
            Balance: ${balance}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
