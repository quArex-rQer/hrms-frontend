import { Menu } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react';

export default function Navi() {
    return (
        <Menu inverted color="black" size="large">
            <Container>
                <Menu.Item
                    name='Logo'
                >
                    Logo
                </Menu.Item>

                <Menu.Item
                    name='Home Page'
                >
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button.Group>
                            <Button>Sign up</Button>
                            <Button.Or />
                            <Button positive>Sign In</Button>
                        </Button.Group>

                    </Menu.Item>

                </Menu.Menu>
            </Container>
        </Menu>


    )
}