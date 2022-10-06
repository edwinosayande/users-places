import React from 'react';
import Input from '../../share/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../share/util/validators';
import { VALIDATOR_MINLENGTH } from '../../share/util/validators';
import Button from '../../share/components/FormElements/Button';
import { useForm } from '../../share/hooks/form-hook';
import './PlaceForm.css';


const NewPlaces = () => {
   const [formState, inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        false
    );

    const placeSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
    }

    return(
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input 
            id= "title"
            element="input" 
            type="text" 
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter a valid title " 
            onInput={inputHandler}
           />
           <Input 
           id="description"
            element="textarea" 
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please Enter a Valid Description (at least 5 characters)" 
           onInput={inputHandler}
           />
           <Input 
           id="address"
           type="text"
            element="input" 
            label="Address"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please Enter a Valid Address" 
           onInput={inputHandler}
           />
           <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    )
}
export default NewPlaces;