 const reducers = (posts = [],action)=>{
    console.log("action",action)
    switch(action.type){
        case 'CREATE' :
            return [...posts,action.payload]
        case 'FETCH_ALL':
            return action.payload    
        default:
             return posts;

    }
}

export default reducers