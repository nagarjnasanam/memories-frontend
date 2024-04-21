import React from "react";
import useStyles from './styles'
import { Card,CardActions,CardContent,CardMedia,Button,Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
const Post = ({post})=>{
const classes  = useStyles()
    return(
        <div>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile.base64 || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title = {post.title} />
                <img src={`${post.selectedFile.base64}`} alt="base64" />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator} </Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className="classes.overlay2">
                    <Button style={{color:'white'}} onClick={()=>{}}>
                        <MoreHorizon fontSize="medium" />
                    </Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
                </div>
                <CardContent>
                   <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like {post?.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={()=>{}}>
                        <DeleteIcon fontSize="small" />
                        Delete 
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post