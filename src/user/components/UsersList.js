import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../share/components/UIElements/Card';

const UsersList = (props) =>{
    if(props.items.length === 0){
        return(
            <div className="center">
                <Card>
                <h2>No user found</h2>
                </Card>
            </div>
        );
    }
    return(
        <ul className="user-list">
            {props.items.map((item)=>{
               return <UserItem 
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                placeCount={item.places}/>
            })}
        </ul>
    )
}
export default UsersList;