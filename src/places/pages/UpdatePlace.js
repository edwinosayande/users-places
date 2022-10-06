import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../share/components/FormElements/Input';
import Button from '../../share/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../share/util/validators';
import { useForm } from '../../share/hooks/form-hook';
import Card from '../../share/components/UIElements/Card';
import './PlaceForm.css';


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
];
const UpdatePlace = () =>{
    const [isLoading, setIsLoading] = useState(true);
    const placeID = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title:{
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.sort(p => p.id === placeID);

    useEffect(() =>{
        if(identifiedPlace){
            setFormData({
                title:{
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true);
        }
        
        setIsLoading(false);
    }, [setFormData, identifiedPlace]);
    
    const placeUpdateSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs)
    }
    if(!identifiedPlace){
        return(
            <div className="center">
           <Card> <h2>Could not Find Place</h2></Card>
            </div>
        );
    }
    if (isLoading){
        return(
            <div className="center">
            <h2>Loading...</h2>
            </div>
        )
    }
   return(
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input id="title" 
        element="input"
        type="text"
        label="Title"
        validators= {[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a Valid Title"
        onInput= {inputHandler}
        initialvalue={formState.inputs.title.value}
        intialvalid={formState.inputs.title.isValid}
        />
        <Input id="description" 
        element="textarea"
        label="Description"
        validators= {[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please Enter a Valid Description (min. 5 characters)."
        onInput= {inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
        />
         {/* <Input id="address" 
        element="input"
        label="Address"
        validators= {[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a Valid Description (min. 5 characters)."
        onInput= {() => {}}
        value={identifiedPlace.address}
        valid={true}
        
        /> */}
        <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
   )
}
export default UpdatePlace;