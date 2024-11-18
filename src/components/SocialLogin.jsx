import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
    return (
        <div>
        <h2 className="font-semibold mb-5">Login With</h2>
        <div className="*:w-full space-y-3">
            <button className="btn">
                <FcGoogle />
                Login With Google
            </button>
            <button className="btn">
                <VscGithub /> 
                Login with Github
            </button>
        </div>
        </div>
    );
    };

export default SocialLogin;
