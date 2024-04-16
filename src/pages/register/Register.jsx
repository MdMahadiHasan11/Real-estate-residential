import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser}= useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");
        const photoUrl = form.get("photoUrl");
        console.log(name,photoUrl , email,password)

        // create user
        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                    <p>All have an account ? <Link to="/login" className="text-blue-500 font-bold" >Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;