import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none ">
        <form className="card-body space-y-3">
            <h2 className="text-center text-3xl font-semibold">Login your account</h2>
            <hr />
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg">Email address</span>
            </label>
            <input
                type="email"
                placeholder="Enter your email address"
                className="input rounded-none bg-base-200 text-sm"
                required
            />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg">Password</span>
            </label>
            <input
                type="password"
                placeholder="Enter your password"
                className="input rounded-none bg-base-200 text-sm"
                required
            />
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                Forgot password?
                </a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-gray-600 text-white text-lg">Login</button>
            </div>
            <h2 className="text-center">Dont’t Have An Account ? <span className="text-red-500 font-bold"><Link to="/auth/register">Register</Link></span></h2>
        </form>
        </div>
        </div>
    );
};

export default Login;
