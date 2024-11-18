import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-5">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
            <button className="btn join-item justify-start">
            <FaFacebook />
            Facebook 
            </button>
            <button className="btn join-item justify-start">
            <FaTwitterSquare></FaTwitterSquare>
            Twitter
            </button>
            <button className="btn join-item justify-start">
            <RiInstagramFill></RiInstagramFill>
            Instagram
            </button>
            </div>
        </div>
    );
};

export default FindUs;