import React, {useState} from "react";

import PostList from "./components/PostList";
import Buttons from "./components/UI/Buttons/Buttons";
import Inputs from "./components/UI/Buttons/Inputs/Inputs";

function App(){

    const [posts] = useState([
        {id:1, title:"123", body:"descriptions"},
        {id:1, title:"123", body:"descriptions"},
        {id:1, title:"123", body:"descriptions"}  
                   
]);

const [title, setTitle] = useState('23');

function handleClick(e) {
    e.preventDefault();
    console.log('Была нажата ссылка.');
  }


    return(
        <div className="App"> 
         <form>
            <Inputs value = {title}></Inputs>
            <Inputs value = {title} placeholder={'text posts'} onChange={e => setTitle(e.target.value)}></Inputs>
            <Buttons type="submit" onClick={handleClick}> create post</Buttons>
           
        </form>    
        <PostList posts={posts} title = "список постов 1" />
        <PostList posts={posts} title = "список постов 1"/>
       
        </div>
    );
}

export default App;