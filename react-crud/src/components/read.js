import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Read = () => {

    const [APIData, setAPIData] = useState([]);
    const url = 'https://617ab890cb1efe001700ffe4.mockapi.io/fakeData';


    useEffect( () => {
        axios.get(url)
            .then(res => setAPIData(res.data))
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    };

    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setAPIData(getData.data);
            });
    }

    const onDelete = (id) => {
        axios.delete(`https://617ab890cb1efe001700ffe4.mockapi.io/fakeData/${id}`);
        getData();
    };


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                    <Table.Cell>
                                        <Link to='/update'>
                                            <Button color='green' onClick={() => setData(data)}>Update</Button>
                                        </Link>
                                        <Button color='red' onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>

                            </Table.Row>
                        )})}
                </Table.Body>
            </Table>
        </div>
    )
}

export default Read;