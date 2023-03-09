import React from 'react'
import { Grid , Container, Flex, Avatar} from '@mantine/core';
import {IconGenderEpicene} from "@tabler/icons-react";

const Navigation = () => {
  return (
    <>
        <nav>
        <div className="Navigation-Wrapper">
            <Container fluid>
                <Grid justify="center" gutter={5} gutterXs={15} gutterMd={25} gutterXl={50}>

                    <Grid.Col span="auto" style={{border:"1px solid black"}}>
                        <div className='Left-Column-Navigation'>
                            <div className="User-Wrapper">
                                <Flex  
                                    mih={50}
                                    bg="blue"
                                    gap="xl"
                                    justify="center"
                                    align="center"
                                    direction="row"
                                    wrap="wrap"
                                    style={{borderRadius:"30px"}}
                                >
                                    <Avatar color="blue" style={{borderRadius:"30px", objectFit:"cover"}}>
                                        <IconGenderEpicene size="1.5rem"/>
                                    </Avatar>
                                    <div className="User-Desc-Wrapper" style={{backgroundColor:"gray"}}>
                                        <h4>Username</h4>
                                        <p>Credits</p>
                                    </div>
                                </Flex>
                            </div>
                        </div>
                    </Grid.Col>

                    <Grid.Col span={6} style={{border:"1px solid black"}}>
                        <div className='Middle-Column-Navigation'>Middle-Column-Navigation</div>
                    </Grid.Col>

                    <Grid.Col span="auto" style={{border:"1px solid black"}}>
                        <div className='Right-Column-Navigation'>Right-Column-Navigation</div>
                    </Grid.Col>

                </Grid>
            </Container>
        </div>
        </nav>
    </>
    
  )
}

export default Navigation