import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppSidebar, AppHeader } from '../../../components/index';


const Webinars = () => {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', file);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token not found");
                return;
            }
            const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/videos/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMessage('File uploaded: ' + res.data.fileName);
            window.location.reload();

        } catch (err) {
            if (err.response.status === 400) {
                setMessage('No file selected');
            } else {
                setMessage('Error uploading file');
            }
        }
    };


    const [videos, setVideos] = useState('');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/videos/upload`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setVideos(res.data);
                // console.log(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchVideos();
    }, []);


    return (
        <>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                    <div className='mt-1 mx-3'>

                        <h1>Upload a Webinar Video</h1>
                        <form onSubmit={onSubmit}>
                            <input className='form-control' type="file" name="video" onChange={onFileChange} /> {/* Ensure 'video' matches Multer configuration */}
                            <input className='form-control bg-primary text-white w-25 mt-3' type="submit" value="Upload" />
                        </form>
                        {message && <p>{message}</p>}


                        <h1>Uploaded Videos</h1>
                        <div className='row'>
                            {videos && videos.map((video, index) => (
                                <div className='col-md-4 mt-5'>
                                    <div key={index}>
                                        <video width="320" height="240" controls >
                                            <source src={video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Webinars;
