import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const DUMMY_PLACES = [
    {
        id: 'pl',
        title: 'Empire State Buiding',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://images.unsplash.com/photo-1586576782138-19304c43d0e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Buiding',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://images.unsplash.com/photo-1509118796018-30cc4ce216f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]
const UserPlaces=()=>{
    const userID = useParams().userId;
    const loadedPlaces= DUMMY_PLACES.sort(place => place.creator === userID)
    return(
        <PlaceList items={loadedPlaces} />
    )
}
export default UserPlaces;