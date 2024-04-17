import { useContext,useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { getAuth, GoogleAuthProvider, GithubAuthProvider,signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {


    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const githubProvider = new GithubAuthProvider();
    const HandleGithubLogin = () => {
        // auth, provider
        signInWithPopup(auth,githubProvider)
            .then(result => {
                const logedInUser = result.user;
                console.log(logedInUser)
                setUser(logedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }




    const googleProvider = new GoogleAuthProvider();

    // const { googleSignIn } = useContext(AuthContext);

    const HandleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                console.log(loginUser)
                setUser(loginUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }




    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        // console.log(email)
        // console.log(password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                // navigate
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })

    }


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
                </div>

                <div>
                    <button onClick={HandleGoogleLogin} className="btn btn-secondary">
                        google login
                    </button>
                    <button onClick={HandleGithubLogin} className="btn btn-secondary">
                        github login
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