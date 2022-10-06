import React from 'react';
import UsersList from '../components/UsersList';

const Users = () =>{
    const USERS = [
        {
        id: 'ul',
        name: 'Lion Lionel',
        image: 'https://media.istockphoto.com/id/1125946943/photo/black-and-white-lion-with-open-mouth.webp?s=612x612&w=is&k=20&c=F4K6XRYuDW3tyo157DXFJMtvYRKm4QfEG00Drmm7Ckg=',
        places: 2
    }
    ]
    return <UsersList items={USERS} />
}
export default Users;