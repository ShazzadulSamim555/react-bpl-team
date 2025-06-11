
const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div>
                <img src="/src/assets/logo.png" alt="" />
            </div>
            <div className="flex gap-3 items-center">
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedule</a>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded">Balance: 0</button>
            </div>
        </div>
    );
};
export default Navbar;