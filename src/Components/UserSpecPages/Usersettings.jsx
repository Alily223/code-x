import React from 'react';
import { Flex } from '@mantine/core';

const Usersettings = () => {
    const rootStyles = getComputedStyle(document.documentElement);
    const darkThemeBBlack = rootStyles.getPropertyValue('--dark-theme-bblack');
    const darkThemeRed = rootStyles.getPropertyValue('--dark-theme-red');
    const darkThemeGrey = rootStyles.getPropertyValue('--dark-theme-grey');
    const darkThemeCyan = rootStyles.getPropertyValue('--dark-theme-cyan');

    return (
    <div className='Page-Wrapper'>
        <div className="User-Settings-Wrapper">
            <Flex
                mih={50}
                bg={darkThemeBBlack}
                gap="xs"
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
            >

                <Flex 
                    mih={50}
                    bg={darkThemeBBlack}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    style={{border: "1px solid black"}}
                >
                    <h1>User Preferences</h1>
                    <h1> - Form</h1>
                </Flex>

                <Flex 
                    mih={50}
                    bg={darkThemeBBlack}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    style={{border: "1px solid black"}}
                >
                    <h1>Privacy and Security</h1>
                    <h1> - Form</h1>
                </Flex>

                <Flex 
                    mih={50}
                    bg={darkThemeBBlack}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    style={{border: "1px solid black"}}
                >
                    <h1>Help and Documentation</h1>
                    <h1> - Form</h1>
                </Flex>

                <Flex 
                    mih={50}
                    bg={darkThemeBBlack}
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="wrap"
                    style={{border: "1px solid black"}}
                >
                    <h1>Feedback</h1>
                    <h1> - Form</h1>
                </Flex>
            </Flex>
        </div>
    </div>
    )
}

export default Usersettings