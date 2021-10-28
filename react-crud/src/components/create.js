import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';



const Create = () => {

    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [checkbox, setCheckbox] = useState(false);
    let history = useHistory();



    const postData = () => {

        const url = "https://617ab890cb1efe001700ffe4.mockapi.io/fakeData";

        axios.post(url, {
            firstName,
            lastName,
            checkbox
        }).then(() => history.push('/read'))


    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button type='submit' onClick={postData}>Submit</Button>
            </Form>
        </div>
    )
}

export default Create;