function Header() {
    return (
        <div className="px-32">
            <div className="container flex justify-between items-center py-4">
                <div className="flex justify-between items-center gap-3">
                    <img src="./public/logo.svg" alt="" />
                    <span className="font-semibold text-3xl">Brave</span>
                </div>
                <nav>
                    <div className="flex space-x-8 text-gray-700">
                        <a
                            href="#"
                            className="hover:text-black font-medium text-xl"
                        >
                            Templates
                        </a>
                        <a
                            href="#"
                            className="hover:text-black font-medium text-xl "
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            className="hover:text-black font-medium text-xl"
                        >
                            Pricing
                        </a>
                        <a
                            href="#"
                            className="hover:text-black font-medium text-xl"
                        >
                            Resources
                        </a>
                    </div>
                </nav>
                <div>
                    <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600">
                        Start Free Trial
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
