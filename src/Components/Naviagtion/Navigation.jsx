import React from 'react'
import { Grid , Container} from '@mantine/core';

import UserObject from './Navigation Components/UserObject';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
    const navigate = useNavigate();

    return (
    <>
        <nav>
            <div className="Navigation-Wrapper">
                <Container fluid m={0} p={0}>
                    <Grid className="Grid-Wrapper" justify="center" m={0} mw="100%">

                        <Grid.Col span="auto">
                            <div className='Left-Column-Navigation'>
                                <UserObject />
                            </div>
                        </Grid.Col>

                        <Grid.Col span={6} align="center">
                            <div className='Middle-Column-Navigation'>Middle-Column-Navigation</div>
                        </Grid.Col>

                        <Grid.Col span="auto" align="end">
                            <div className='Right-Column-Navigation'>
                                <button onClick={()=> navigate("/")}>Temp Home</button>
                            </div>
                        </Grid.Col>

                    </Grid>
                </Container>
            </div>
        </nav>
    </>

    )
}

export default Navigation