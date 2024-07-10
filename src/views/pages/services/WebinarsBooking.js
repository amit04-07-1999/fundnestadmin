import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { AppSidebar, AppHeader } from '../../../components/index';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';



const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchWebinars = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getWebinarBooking`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(response.data, "fghj");
                setBookings(response.data);

            } catch (err) {
                setError(err.message || 'Unexpected Error');
            }
        };

        fetchWebinars();
    }, []);


    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found");
            return;
        }

        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/admin/deleteWebinarBooking/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response.data.message);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };


    const columns = useMemo(
        () => [
            {
                header: ' Customer Name',
                accessorKey: 'name',
            },
            {
                header: 'Email Id',
                accessorKey: 'email',
            },
            // {
            //     header: 'Date',
            //     accessorFn: (dataRow) => new Date(dataRow.date).toDateString(),
            //     accessorKey: 'date',
            // },
            {
                header: 'Purpose Of Booking',
                accessorKey: 'purposeOfBooking',
            },
            {
                header: 'Delete',
                accessorFn: (dataRow) => <CIcon icon={cilTrash} onClick={() => handleDelete(dataRow._id)} />,
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data: bookings,
        enableRowSelection: false,
        enableColumnOrdering: false,
        enableGlobalFilter: true,
    });


    return (
        <>
            <AppSidebar />
            <div className="wrapper d-flex flex-column min-vh-100">
                <AppHeader />
                <div className="body flex-grow-1">
                    <div className='mt-1 mx-3'>
                        <h4 className='mb-2'>Webinar Bookings</h4>
                        <MantineReactTable table={table} />
                        {/* {error && <div className="error">{error}</div>}
                        <ul>
                            {entrepreneurs.map((entrepreneur) => (
                                <li key={entrepreneur._id}>{entrepreneur.name}</li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookings;
