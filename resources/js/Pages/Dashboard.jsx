import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import UserList from '../Components/Userlist';
import './global.css';
export default function Dashboard(props) {

    const { data, setData, post, errors, processing } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',

    });

    const submit = (e) => {
        e.preventDefault();

        post(route('create.user'));
    };

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    console.log
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

    const [confirmingUserView, setconfirmingUserView] = useState(false);
    const confirmUserView = () => {
        setconfirmingUserView(true);
    };
    const closeModalView = () => {
        setconfirmingUserView(false);

        reset();
    };

    // user edit

    const [confirmingUserEdit, setconfirmingUserEdit] = useState(false);
    const confirmUserEdit = () => {
        setconfirmingUserEdit(true);
    };
    const closeModalEdit = () => {
        setconfirmingUserEdit(false);

        reset();
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

                                <div class="table-row-group border-solid border-2 mb-3">
                                    <div class="table-row pb-3 pt-5 border-solid border-2 border-sky-500 ...">
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased ms-5">1</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">Ridoy khan</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">ridoy1658</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">pou4w98y@gmail.com</p></div>


                                        <div class="table-cell ...">
                                            <i class="fa-regular fa-eye antialiased hover:subpixel-antialiased view" onClick={confirmUserView}></i>
                                            <i class="fa-regular fa-pen-to-square m-1 edit" onClick={confirmUserEdit} ></i>
                                            <i class="fa-regular fa-trash-can m-1 danger"></i></div>
                                    </div>



                                </div>
                                <div class="table-row-group rounded hover:rounded-lg ">
                                    <div class="table-row pb-3 pt-5 border-solid border-2 border-sky-500 ...">
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased ms-5">2</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">Ridoy khan</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">ridoy1658</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">pou4w98y@gmail.com</p></div>


                                        <div class="table-cell ...">
                                            <i class="fa-regular fa-eye antialiased hover:subpixel-antialiased" onClick={confirmUserView}></i>
                                            <i class="fa-regular fa-pen-to-square m-1" onClick={confirmUserEdit} ></i>
                                            <i class="fa-regular fa-trash-can m-1"></i></div>
                                    </div>



                                </div>
                                <div class="table-row-group rounded hover:rounded-lg ">
                                    <div class="table-row pb-3 pt-5 border-solid border-2 border-sky-500 ...">
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased ms-5">2</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">Ridoy khan</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">ridoy1658</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">pou4w98y@gmail.com</p></div>


                                        <div class="table-cell ...">
                                            <i class="fa-regular fa-eye antialiased hover:subpixel-antialiased" onClick={confirmUserView}></i>
                                            <i class="fa-regular fa-pen-to-square m-1" onClick={confirmUserEdit} ></i>
                                            <i class="fa-regular fa-trash-can m-1"></i></div>
                                    </div>



                                </div>
                                <div class="table-row-group rounded hover:rounded-lg ">
                                    <div class="table-row pb-3 pt-5 border-solid border-2 border-sky-500 ...">
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased ms-5">2</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">Ridoy khan</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">ridoy1658</p></div>
                                        <div class="table-cell ..."><p class="text-slate-400 hover:text-sky-400 antialiased hover:subpixel-antialiased">pou4w98y@gmail.com</p></div>


                                        <div class="table-cell ...">
                                            <i class="fa-regular fa-eye antialiased hover:subpixel-antialiased" onClick={confirmUserView}></i>
                                            <i class="fa-regular fa-pen-to-square m-1" onClick={confirmUserEdit} ></i>
                                            <i class="fa-regular fa-trash-can m-1"></i></div>
                                    </div>



                                </div>
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

                            className="mt-1 block w-3/4"
                        />
                        <InputError className="mt-2" message={errors.name} />
                    </div>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            UserName
                        </p>
                        <TextInput
                            id="username"
                            type="text"
                            name="username"
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="UserName"

                            autoComplete="username"
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
                            className="mt-1 block w-3/4"
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
                            className="mt-1 block w-3/4"
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
            <Modal show={confirmingUserView} onClose={closeModalView}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Create User Account
                    </h2>



                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            UserName
                        </p>

                        ridoy1658


                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Email
                        </p>
                        pou4w98y@gamil.com


                    </div>


                    <div className="mt-6 flex ">


                        <DangerButton className="" onClick={closeModalView} >
                            Closed
                        </DangerButton>
                    </div>
                </div>
            </Modal>
            {/* ====================View edit======================= */}
            <Modal show={confirmingUserEdit} onClose={closeModal}>
                <form className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Update User Account
                    </h2>



                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Name
                        </p>
                        <TextInput
                            id="UserName"
                            type="text"
                            name="password"


                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Name"
                        />
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            UserName
                        </p>
                        <TextInput
                            id="UserName"
                            type="text"
                            name="password"


                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="UserName"
                        />


                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Email
                        </p>
                        <TextInput
                            id="UserName"
                            type="email"
                            name="password"


                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="email"
                        />


                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />
                        <p className="mt-1 text-sm text-gray-600">
                            Password
                        </p>
                        <TextInput
                            id="UserName"
                            type="password"
                            name="password"


                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="password"
                        />


                    </div>

                    <div className="mt-6 flex ">
                        <PrimaryButton >Update</PrimaryButton>

                        <DangerButton className="ml-3" onClick={closeModal} >
                            Cancle
                        </DangerButton>
                    </div>
                </form>
            </Modal>

        </AuthenticatedLayout>
    );
}
