import React, { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the Laravel backend
        fetch('/api/users') // Adjust the API endpoint as needed
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching user data:', error));
    }, []);

    return (
        <div className="mt-4">

            
            <h2 className="text-lg font-semibold">User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>





    );
}

export default UserList;
