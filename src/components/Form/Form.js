import React from "react";
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import useStyles from './styles'
import { useState } from "react";
import FilleBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import { createPost } from "../../actions/posts";
const Form = ()=>{
    const classes = useStyles()
    const [postData,setPostData] = useState({
        creator :"",title:"", message:"",tags:"",selectedFile:""
    })
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        e.preventDefault()

            dispatch(createPost(postData))
    }
    const clear = ()=>{

    }
    return(
        <div>
            <Paper className={`${classes.paper} ${classes.root}`}>
                <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a Memory</Typography>
                    <TextField className={classes.textField} name="creator" varient="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>{setPostData({...postData,creator:e.target.value})}}/>
                    <TextField name="title" varient="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>{setPostData({...postData,title:e.target.value})}}/>
                    <TextField name="Message" varient="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>{setPostData({...postData,message:e.target.value})}}/>
                    <TextField name="tags" varient="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>{setPostData({...postData,tags:e.target.value})}}/>
                    <div className={classes.fileInput}>
                        <FilleBase
                             type='file'
                             multile={false}
                              onDone = {(base64)=>{setPostData({...postData,selectedFile:base64})}}
                         />
                    </div>

                    <Button className={classes.buttonSubmit} color="primary" variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                    <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" type="submit" onClick={clear} fullWidth>Clear</Button>

                </form>
            </Paper>
        </div>
    )
}

export default Form