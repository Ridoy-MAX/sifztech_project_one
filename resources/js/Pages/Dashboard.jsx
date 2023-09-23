import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SweetAlert from '@/Components/SweetAlert';
import UserEditModal from './Modal/EditUserModal';

import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import UserList from '../Components/Userlist';
import './global.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Dashboard(props, users) {
    
   

    const { data, setData, post, errors, processing } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',

    });

    const [message, setMessage] = useState('');


    const submit = async (e) => {
        e.preventDefault();
    
        const response = await post(route('create.user')); // Use await to wait for the response
    
        try {
            const response = await fetch('/api/create-item', {
              method: 'POST',
              // Add any necessary request headers and data here
            });
      
            if (response.status === 200) {
              const data = await response.json();
              setMessage(data.message);
              SweetAlert({
                type: 'success',
                title: 'Success',
                text: data.message,
              });
            } else {
              // Handle errors and show an error message if needed
              SweetAlert({
                type: 'error',
                title: 'Error',
                text: data.message,
              });
            }
          } catch (error) {
            console.error('Error:', error);
          }



    };
    

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    // all modal============================

    const [editUser, setEditUser] = useState(null);
    const [viewUser, setViewUser] = useState(null);
    // create user

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };
    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };


    // user view

    const closeViewModal = () => {
        setViewUser(null);
    };

    // user edit

    const openEditModal = (user) => {
        setEditUser(user);
    };

    const closeEditModal = () => {
        setEditUser(null);
    };



    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}

        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg order-solid border-2 border-sky-500 ...">
                        <div className="p-6 text-gray-900 b">
                            <div className="account_create mb-3">

                                <PrimaryButton className="" onClick={confirmUserDeletion}>
                                    Create Account
                                </PrimaryButton>
                            </div>
                            {/* <UserList /> */}
                            User List
                            <div class="table w-full ...">

                                <div class="table-header-group mb-3">
                                    <div class="table-row">
                                        <div class="table-cell text-left ..."><h1 className='text-xl font-bold'>Serial</h1></div>
                                        <div class="table-cell text-left ..."><h1 className='text-xl font-bold'>Name</h1></div>
                                        <div class="table-cell text-left ..."><h1 className='text-xl font-bold'>UserName</h1></div>
                                        <div class="table-cell text-left ..."><h1 className='text-xl font-bold'>Email</h1></div>
                                        <div class="table-cell text-left ..."><h1 className='text-xl font-bold'>Action</h1></div>
                                    </div>
                                </div>






                                {props.users.map((user) => (


                                    <div class="table-row-group border-solid border-2 mb-3">
                                        <div class="table-row pb-3 pt-5 border-solid border-2 border-sky-500 ...">
                                            <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased ms-5">{user.id}</p></div>
                                            <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">{user.name}</p></div>
                                            <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">{user.username} </p></div>
                                            <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">{user.email}</p></div>


                                            <div class="table-cell ...">
                                                <i class="fa-regular fa-eye antialiased hover:subpixel-antialiased view" onClick={() => setViewUser(user)}></i>
                                                <i class="fa-regular fa-pen-to-square m-1 edit" onClick={() => openEditModal(user)} ></i>
                                               

                                                <Link href={`/user/delete/${user.id}`} className='btn btn-sm btn-danger'> <i class="fa-regular fa-trash-can m-1 danger"></i></Link>
                                         



                                            </div>
                                        </div>
                                    </div>
                                ))}




                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* ====================create user======================= */}

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form className="p-6" onSubmit={submit}>

                    <h2 className="text-lg font-medium text-gray-900">
                        Create User Account
                    </h2>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Name
                        </p>
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Name"

                            autoComplete="name"
                            value={data.name}
                            onChange={handleOnChange}
                            required

                            className="mt-1 block w-full"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="mt-6">
                      
                        <p className="mt-1 text-sm text-gray-600">
                            UserName
                        </p>
                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            className="mt-1 block w-full"
                        
                            placeholder="UserName"

                            value={data.username}
                            onChange={handleOnChange}
                            required

                        />
                        <InputError className="mt-2" message={errors.username} />

                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Email
                        </p>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            className="mt-1 block w-full"
                            isFocused
                            placeholder="email"


                            autoComplete="email"
                            value={data.email}
                            onChange={handleOnChange}
                            required
                        />

                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Password
                        </p>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            className="mt-1 block w-full"
                            isFocused
                            placeholder="password"


                            autoComplete="password"
                            value={data.password}
                            onChange={handleOnChange}
                            required
                        />

                        <InputError className="mt-2" message={errors.password} />
                    </div>

                    <div className="mt-6 flex ">
                        <PrimaryButton >Create</PrimaryButton>

                        <DangerButton className="ml-3" onClick={closeModal} >
                            Cancle
                        </DangerButton>
                    </div>
                </form>
            </Modal>

            {/* ====================View user======================= */}
            <Modal show={!!viewUser} onClose={closeViewModal}>
                {viewUser && (
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            User Details
                        </h2>

                        <div className="mt-6">
                            <InputLabel htmlFor="username" value="Username" className="sr-only" />
                            <p className="mt-1 text-sm text-gray-600">
                                Name
                            </p>
                            <p>{viewUser.name}</p>
                        </div>
                        <div className="mt-6">
                            <InputLabel htmlFor="username" value="Username" className="sr-only" />
                            <p className="mt-1 text-sm text-gray-600">
                                Username
                            </p>
                            <p>{viewUser.username}</p>
                        </div>

                        <div className="mt-6">
                            <InputLabel htmlFor="email" value="Email" className="sr-only" />
                            <p className="mt-1 text-sm text-gray-600">
                                Email
                            </p>
                            <p>{viewUser.email}</p>
                        </div>

                        <div className="mt-6 flex ">
                            <DangerButton className="" onClick={closeViewModal}>
                                Close
                            </DangerButton>
                        </div>
                    </div>
                )}
            </Modal>
        
            {/* ====================View edit======================= */}
            {editUser && (
                <UserEditModal user={editUser} onClose={closeEditModal} />
            )}



                <ToastContainer
                    position="top-right"
                    autoClose={3000} // Adjust the autoClose time as needed
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
      

        </AuthenticatedLayout>
    );
}
