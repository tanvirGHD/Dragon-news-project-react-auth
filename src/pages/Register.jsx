import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const {createNewUser, user, setUser} = useContext(AuthContext);

    const handleSubmit =(e) =>{
        e.preventDefault();
        //get from data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log({name, email, photo, password});

        createNewUser(email, password)
        .then(result => {
            const user  = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error=>{
            const errorMessage = error.message;
            console.log(errorMessage);
        })
    }



    return (
        <div className="min-h-screen flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none ">
        <form
        onSubmit={handleSubmit}
        className="card-body space-y-3">
            <h2 className="text-center text-3xl font-semibold">Register your account</h2>
            <hr />
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg">Your Name</span>
            </label>
            <input
                name='name'
                type="name"
                placeholder="Enter your name"
                className="input rounded-none bg-base-200 text-sm"
                required
            />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text text-lg">Photo URL</span>
            </label>
            <input
                name='photo'
                type="text"
                placeholder="Enter photo URL"
                className="input rounded-none bg-base-200 text-sm"
                required
            />
            <label className="label">
                <span className="label-text text-lg">Email address</span>
            </label>
            <input
                name='email'
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
                name='password'
                type="password"
                placeholder="Enter your password"
                className="input rounded-none bg-base-200 text-sm"
                required
            />
            </div>
            <div className="form-control">
            <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                Forgot password?
                </a>
            </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn bg-gray-600 text-white text-lg">Register</button>
            </div>
            <h2 className="text-center">Allready have an account? please, <span className="text-red-500 font-bold"><Link to="/auth/login">Login</Link></span></h2>
        </form>
        </div>
        </div>
    );
};

export default Register;