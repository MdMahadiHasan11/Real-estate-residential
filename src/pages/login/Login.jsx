import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();




     const { ssignInWithPopup } = useContext(AuthContext)
    const [user, setUser] = useState(null);


    const auth = getAuth(app)
    const githubProvider = new GithubAuthProvider();
    
    const HandleGithubLogin = () => {
        ssignInWithPopup(auth, githubProvider)
            .then(result => {
                const logedInUser = result.user;
                console.log(logedInUser)
                toast.success("Successfully Login");
                setUser(logedInUser);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error', error.message)

            })
    }


    // 





    // const [errorLogin, setErrorLogin] = useState(true);
    // const { createUser } = useContext(AuthContext)

    // const HandleGithubLogin = () => {

    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const logedInUser = result.user;
    //             console.log(logedInUser)
    //             setUser(logedInUser);
    //         })
    //         .catch(error => {
    //             console.log('error', error.message)

    //         })


    //         createUser(email, password ,displayName,photoURL)
    //         .then(result => {
    //             console.log(result)
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setRegisterError(error.message);
    //             toast.success(registerError);
    //         })
    // }



    // const [user, setUser] = useState(null);
    // const auth = getAuth(app)
    // const githubProvider = new GithubAuthProvider();
    // const HandleGithubLogin = () => {
    //     signInWithPopup(auth, githubProvider)
    //         .then(result => {
    //             const logedInUser = result.user;
    //             console.log(logedInUser)
    //             setUser(logedInUser);
    //         })
    //         .catch(error => {
    //             console.log('error', error.message)

    //         })
    // }




    const googleProvider = new GoogleAuthProvider();

    // const { googleSignIn } = useContext(AuthContext);

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                toast.success("Successfully Login");
                console.log(loginUser)
                setUser(loginUser);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }




    


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        // console.log(email)
        // console.log(password)
        signIn(email, password)
            .then(result => {
                toast.success("Successfully Login");
                console.log(result.user)
                // navigate
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
                // setErrorLogin(false);
                toast.success("password or email not matching!!");
            })

    }


    // const notify = () => toast("Don`t matching password!");


    return (
        <div className="">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>


                    <form onSubmit={handleLogin} className="lg:w-1/2 md:w-3/4 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    <p>Don`t have an account ? <Link to="/register" className="text-blue-500 font-bold" >Register</Link></p>
                    <div>

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
                <hr className="border-t border-gray-300 my-4" />

                <div className="text-center">
                    <div>
                        <p className="mt-5 mb-3">Or Sign up using</p>
                    </div>
                    <button onClick={HandleGoogleLogin} className=" text-3xl btn m-4">
                    <FcGoogle />
                    </button>
                    <button onClick={HandleGithubLogin} className=" text-3xl btn ">
                    <BsGithub />
                    </button>
                    {/* {user && <div>
                        <p>user: {user.displayName}</p>
                    </div>} */}

                </div>


            </div>
        </div>
    );
};

export default Login;