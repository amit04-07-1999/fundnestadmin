import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { AppSidebar, AppHeader } from '../../../components/index';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import CIcon from '@coreui/icons-react';
import { cilTrash } from '@coreui/icons';
import { cilPencil } from '@coreui/icons';
import { Link } from 'react-router-dom';


const Entrepreneur = () => {
    const [entrepreneurs, setEntrepreneurs] = useState([]);

    useEffect(() => {
        const fetchEntrepreneurs = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token not found");
                    return;
                }
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/admin/getentrepreneurs`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(response.data);
                setEntrepreneurs(response.data);
            } catch (err) {
                setError(err.message || 'Unexpected Error');
            }
        };

        fetchEntrepreneurs();
    }, []);


    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("Token not found");
            return;
        }

        try {
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/admin/deleteEI/${id}`, {
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
                header: 'Name',
                accessorKey: 'name',
            },
            {
                header: 'Eamil',
                accessorKey: 'email',
            },
            {
                header: 'Company Name',
                accessorKey: 'companyname',
            },
            {
                header: 'Role',
                accessorKey: 'role',
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
        data: entrepreneurs,
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
                        <div className='d-flex justify-content-between mb-5'>
                            <h4 className='mb-2'>ALL Entrepreneurs</h4>
                            <Link to="/adduser" className='btn border-0 bg-primary text-white rounded'>Add <CIcon icon={cilPencil} /> </Link>
                        </div>
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

export default Entrepreneur;
