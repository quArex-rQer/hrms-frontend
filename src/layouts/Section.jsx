import React from 'react'
import { Grid } from "semantic-ui-react";
import EmployerList from '../pages/EmployerList';
import JobList from '../pages/JobList';
import CandidateList from '../pages/CandidateList';

export default function Section() {
    return (
        <div>
            <Grid columns={4} celled="internally" divided="vertically">
                <Grid.Row >
                    <Grid.Column width={16}>
                        <EmployerList />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16}>
                        <CandidateList />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16}>
                        <JobList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )

}