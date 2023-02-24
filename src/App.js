import React, {useEffect} from "react";
import Post from "./components/Post";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

import {setPosts} from "./redux/actions/posts";




function App() {
const dispatch = useDispatch()
const {items} = useSelector(({posts}) => {
    return {
        items: posts.items
    }
})


    useEffect(() => {
        axios.get('https://63f5d48659c944921f674f8a.mockapi.io/posts').then(({data})=> {
            dispatch(setPosts(data)) })
    },[])



    return (

   <div>
    {items && items.map(({title, description, image} , key) => {
       return (
       <Post key={key}
       title={title}
       description={description}
       image={image}
       />
       )
   })}
   </div>
  );
}

export default App;
