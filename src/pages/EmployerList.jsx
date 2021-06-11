import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>
            <Header floated='left' color='blue'>

                <Header.Content>Employer List</Header.Content>
            </Header>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sirket Maili</Table.HeaderCell>
                        <Table.HeaderCell>Sirket Adi</Table.HeaderCell>
                        <Table.HeaderCell>Sirketin Sitesi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.websiteAdress}</Table.Cell>
                                <Table.Cell width='2'></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                            <Menu size="small" floated='right' borderless pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>



        </div>
    )

}