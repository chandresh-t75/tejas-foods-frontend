import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserProfile = () => {
    const axiosPublic = useAxiosPublic();
    const { updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    console.log(imageHostingKey); // Output: YOUR_IMAGE_HOSTING_KEY
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('image',data.photoURL[0]);
        const imageFile =  data.photoURL[0];
        console.log("imageFile: " + imageFile);

        try {
            const hostingImg = await axiosPublic.post(imageHostingApi,formData,{
                headers: {
                    "content-type": "multipart/form-data",
                },
            });

            console.log(hostingImg.data);

            if (hostingImg.data.success){
                const name = data.name;
                const photoURL = hostingImg.data.data.display_url;

                console.log(name, photoURL);

                updateUserProfile(name, photoURL).then(() => {
                    // Profile updated!
                    
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Profile updated successfully',
                        showConfirmButton: false,
                        timer: 3000
                      })
                    //   alert("Profile updated successfully");
                    navigate("/");

                }).catch((error) => {
                    // An error occurred
                    // ...
                });
            }
        } catch (error) {
            // Handle error
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className='h-screen max-w-md mx-auto flex items-center justify-center'>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name")} placeholder="Your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type="file" {...register("photoURL")} className="file-input w-full mt-1" />
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' value={"Update"} className="btn bg-green text-white" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
