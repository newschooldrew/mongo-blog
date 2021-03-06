import {createContext} from 'react'
export const AuthContext = createContext({
    username:'',
    posts:null,
    allPosts:null,
    latestComment:'',
    allComments:null,
    newComment:null,
    hasUpdatedPost:null,
    editMode:false,
    postLiked:false,
    commentLiked:false,
    commentDisliked:false,
    favorites:null,
    postLiked:false,
    postDisliked:false,
    individualPost:null
})
export default AuthContext;