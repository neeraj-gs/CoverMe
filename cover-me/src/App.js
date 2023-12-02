import React, { useEffect, useState } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';
import { loadData } from './utils/localStorage';
import LandingPage from './components/LandingPage';

function App() {

  const [page,setPage] = useState();
  const [resume,setResume] = useState();
  const [openAIKey,setOpenAIKey] = useState();

  useEffect(()=>{
    const fetchLocalData = async()=>{
      const fetchedResume = await loadData("resume");
      const fetchedAIKey = await loadData("openAIKey");

      setResume(fetchedResume)
      setOpenAIKey(fetchedAIKey) //
    } 
    fetchLocalData();
    
  },[])

  switch (page){
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} resume={resume}  openAIKey={openAIKey}/>;

    case ROUTES.PROFILE:
      return <Profile setPage={setPage} resume={resume} setResume={setResume} openAIKey={openAIKey} setOpenAIKey={setOpenAIKey} />;

      default:
        return <LandingPage />
  }

}

export default App;
