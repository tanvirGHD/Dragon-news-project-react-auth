import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className="flex justify-between">
            <div className="">{user.name}</div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login">
                <div className="flex items-center gap-3">
                    <img src={userIcon} alt="" />
                    <Link to="/auth/login" className="bg-[#D72050] text-white px-3 py-2">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
