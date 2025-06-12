const Footer = () => {
    return (
        <div className="bg-blue-950 text-white px-6 py-20 flex flex-col items-center space-y-10">
            <div>
                <img src="/src/assets/logo-footer.png" alt="Logo" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full text-center">
                {/* About Us */}
                <div className="h-full flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="text-sm text-gray-400">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="h-full flex flex-col gap-2">
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <ul className="text-sm text-gray-400 space-y-1">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className=" flex flex-col gap-2 items-center">
                    <h2 className="text-2xl font-bold">Subscribe</h2>
                    <p className="text-sm text-gray-400">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div className="flex">
                        <input
                            className="px-4 py-2 rounded-l-full text-black focus:outline-none"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <button className="px-4 py-2 bg-teal-600 rounded-r-full hover:bg-teal-700 transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
