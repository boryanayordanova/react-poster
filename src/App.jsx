import { useState } from "react";

import PostsList from "./components/PostsList";
import MainHeader from './components/MainHeader';
function App() {
  const [ modalIsVissible, setModalIsVissible] = useState(false);

  function showModalHandler(){
    setModalIsVissible(true);
  }

  function hideModalHandler() {
    setModalIsVissible(false);
}

  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <PostsList isPosting={modalIsVissible} onStopPosting={hideModalHandler} />
    </main>
  </>
  )
}



export default App;
