import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import '../global.css';

function UserEditModal({ user, onClose }) {
    const [openEditModal, setOpenEditModal] = useState(false);

    const openModalView = () => {
        setOpenEditModal(true);
    };

    const closeModalView = () => {
        setOpenEditModal(false);
        // Optionally, you can reset the form data here if needed
        setFormData({
            name: user.name,
            username: user.username,
            email: user.email,
        });
    };

    const [formData, setFormData] = useState({
        name: user.name,
        username: user.username,
        email: user.email,
        // Add other fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send a PUT request to update the user details
        Inertia.put(route('users.update', user.id), formData).then(() => {
            onClose(); // Close the modal after a successful update
            closeModalView(); // Close the edit modal
        });
    };

    return (
        <>
    
            <Modal show={openEditModal} onClose={closeModalView}>
                {/* Your modal content here */}
                hi
            </Modal>

            <div className="modal-content">
                <div className="content">
                    <form onSubmit={handleSubmit} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 mt-6">Update User</h2>
                        <div className="mt-6">
                            <label className="mt-1 text-sm text-gray-600">Name:</label>
                            <TextInput
                                type="text"
                                name="name"
                                className="mt-1 block w-full"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mt-6">
                            <label className="mt-1 text-sm text-gray-600">Username:</label>
                            <TextInput
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                            />
                        </div>
                        <div className="mt-6">
                            <label className="mt-1 text-sm text-gray-600">Email:</label>
                            <TextInput
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full"
                            />
                        </div>
                        {/* Add other form fields as needed */}
                        <div className="form-group mt-6">
                            <PrimaryButton type="submit">Update</PrimaryButton>
                            <DangerButton className="ml-3" onClick={onClose}>
                                Cancel
                            </DangerButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UserEditModal;
