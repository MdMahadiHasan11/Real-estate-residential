import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photoUrl = form.get("photoUrl");
        console.log(name, photoUrl, email, password)

        // password check
        if (password.length < 6) {
            // setRegisterError('Password should be at least 6 characters or longer');
            toast.success("Password should be at least 6 characters or longer");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            // setRegisterError('Your password have at least one uppercase character.')
            toast.success("Your password have at least one uppercase character.");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            // setRegisterError('')
            toast.success("Your password have at least one lowercase character.");
            return;
        }
        // register error reset
        setRegisterError('');
        setSuccess('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                toast.success(registerError);
            })

    }


    return (
        <div className="">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>


                    <form onSubmit={handleRegister} className="lg:w-1/2 md:w-3/4 mx-auto">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                            <span onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p>All have an account ? <Link to="/login" className="text-blue-500 font-bold" >Login</Link></p>

                    <div>
                        {/* {
                            registerError && <p className="text-red-500 font-bold">{registerError}</p>
                        } */}
                        {/* {
                            success && <p className="text-blue-500 font-bold">{success}</p>
                        } */}
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"

                        />
                        {/* Same as */}
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;