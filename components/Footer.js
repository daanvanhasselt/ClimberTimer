import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

const AppFooter = (props) => {
    return (
        <Footer>
            <FooterTab>
                <Button vertical active>
                    <Icon name="md-stopwatch" />
                    <Text>Stopwatch</Text>
                </Button>
                <Button vertical>
                    <Icon name="md-podium" />
                    <Text>Workouts</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default AppFooter