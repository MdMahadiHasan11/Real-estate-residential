// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {

    // createUser(email, password)
    //     .then(() => {
    //         updateUserProfile(name, photoUrl)
    //             .then(() => {
    //                 toast.success("Successfully Register");
    //                 // setUser(result.user)
    //                 navigate('/')
    //             })



    //     })

    const { user, updateUserProfile } = useContext(AuthContext);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name = null, photoUrl = null } = data;
        // register error reset
        // setRegisterError('');
        // setSuccess('');

        console.log(name)
        console.log(photoUrl)
        console.log()
        console.log(user.photoURL)
        // createUser(email, password)
        //     .then(() => {
        if (!name && !photoUrl) { toast.success("Profile not Updated"); }
        else if (!name && photoUrl) {
            updateUserProfile(user.displayName, photoUrl)
                .then(() => {
                    toast.success("Successfully photo Updated");
                    // navigate('/')
                })
        }
        else if (name && !photoUrl) {
            updateUserProfile(name, user.photoURL)
                .then(() => {
                    toast.success("Successfully name Updated");
                    // navigate('/')
                })
        }
        else{
            updateUserProfile(name, user.photoUrl)
                .then(() => {
                    toast.success("Successfully profile Updated");
                    // navigate('/')
                })
        }


        // })
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <p className=" font-bold text-5xl ">
                    <span >Hello , </span>  <span className=" text-cyan-600">{user.displayName} </span>

                </p>
                <p className="mt-6 mb-12 font-medium">
                    Please update your profile
                </p>
                <img src={user.photoURL ? user.photoURL :`https://i.ibb.co/qW320MT/images.jpg`} className="rounded-full w-28 h-28" />
                <p className="font-bold my-2">{user.email}</p>
            </div>


            {/*  */}


            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 md:w-3/4 mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered"  {...register("name", { required: false })} />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="photoUrl" className="input input-bordered"  {...register("photoUrl", { required: false })} />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
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
    );
};

export default UpdateProfile;