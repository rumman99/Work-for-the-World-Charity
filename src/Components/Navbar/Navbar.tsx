import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="">
        <div className="navbar rounded-full bg-base-100 flex justify-evenly bg-slate-500">
            <img className="w-20 hover:hue-rotate-90" src={logo} alt="" />
            <ul className="">
                <Link to='/' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Home</Link>
                <Link className="hover:text-white btn btn-ghost xl:text-lg" to='/about'>About Us</Link>
                <Link to='donation' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Donation</Link>
                <Link className="hover:text-white btn btn-ghost xl:text-lg" to='events'>Events</Link>
                <Link to='blogs' className="hover:text-white xl:mx-8 btn btn-ghost xl:text-lg">Blogs</Link>
                <Link to='login'><button className="hover:text-white btn btn-warning ">Login</button></Link>
            </ul>
            </div>
        </div>
    );
};

export default Navbar;