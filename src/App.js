import React from "react";
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import memories from './images/memories.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'
import {getPosts} from './actions/posts'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const App  =()=>{
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align='center'>Memories</Typography>
                <img className={classes.image} src={memories} height="60" alt="memories" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={8}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App