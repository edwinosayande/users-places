import React, { useState, useContext } from 'react';
import Input from '../../share/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../share/util/validators';
import { VALIDATOR_MINLENGTH } from '../../share/util/validators';
import { VALIDATOR_EMAIL } from '../../share/util/validators'
import Button from '../../share/components/FormElements/Button';
import { useForm } from '../../share/hooks/form-hook';
import Card from '../../share/components/UIElements/Card';
import { AuthContext } from '../../share/context/auth-context';
import './Auth.css';

const Auth = () =>{
    const auth = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true)
    const [formState, inputHandler, setFormData] = useForm(
        {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            },
        },
        false
    );
    const switchModeHandler=()=>{
        if(!isLoginMode){
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        }else{
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },
            false
            );

        }
        setIsLoginMode( prevMode => !prevMode);
    }

    const authSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    }


return(
    <Card className="place-form">
        <h2>Login Required</h2>
        <hr/>
    <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
            <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler} />
        )}
            <Input 
            id= "email"
            element="input" 
            type="text" 
            label="Email"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="please enter a valid Email " 
            onInput={inputHandler}
           />
           <Input 
           id="password"
            element="input"
            type="password" 
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please Enter a Valid Password" 
           onInput={inputHandler}
           />
           <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
        </form><br></br>
        <Button inverse onClick={switchModeHandler}> {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
        </Card>
)
};
export default Auth;