import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
import {Grid,CircularProgress} from '@material-ui/core'
import useStyles from './style'
const Posts = ()=>{
    const classes =  useStyles()
    const posts = useSelector((state)=> state.posts)
    console.log("posts",posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignContent="stretch" spacing={3} >
                {
                    posts.map((post,index)=>(
                        <Grid item key={index} xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))
                }

            </Grid>
        )
    )
}

export default Posts