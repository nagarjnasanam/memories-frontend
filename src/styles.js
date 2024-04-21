import { makeStyles } from "@material-ui/core/styles";
export default makeStyles(()=>({
    appBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent : 'center',
        alignItems: 'center',
        margin:'10px',
        borderRadius : 15
    },
    image:{
        width: '70px',
        height: '40px',
        marginLeft: '10px',
        color: 'rgba(0,183,255, 1) !important',
        // backgroundColor: 'hsl(136,77%,84% )'
    }
}))