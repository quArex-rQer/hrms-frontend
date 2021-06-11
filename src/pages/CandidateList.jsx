import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import Candidateservice from '../services/candidateService'

export default function CandidateList() {
    const [candidate, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new Candidateservice()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <div>
            <Header floated='left' color='blue'>

                <Header.Content>Candidate List</Header.Content>
            </Header>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Aday adi</Table.HeaderCell>
                        <Table.HeaderCell>Aday Soyadi</Table.HeaderCell>
                        <Table.HeaderCell>Aday Emaili</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidate.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell width='2'></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='8'>
                            <Menu size="small" floated="right" borderless pagination>
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