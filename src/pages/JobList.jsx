import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table, Header } from 'semantic-ui-react'
import JobService from '../services/jobService'

export default function JobList() {
    const [job, setJobs] = useState([])

    useEffect(() => {
        let jobService = new JobService()
        jobService.getJobs().then(result => setJobs(result.data.data))
    }, [])

    return (
        <div>
            <Header floated='left' color='blue'>

                <Header.Content>Job List</Header.Content>
            </Header>
            <Table celled selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Is adi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        job.map(job => (
                            <Table.Row key={job.id}>
                                <Table.Cell>{job.title}</Table.Cell>
                                <Table.Cell width='2'></Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}