import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="flex justify-evenly pt-4">
            <img className="w-20" src={logo} alt="" />
            <ul className="flex text-black">
                <li className="mx-8">Home</li>
                <li>About Us</li>
                <li className="mx-8">Donation</li>
                <li>Events</li>
                <li className="mx-8">Blogs</li>
                <button className="btn btn-warning">Login</button>
            </ul>
        </div>
    );
};

export default Navbar;