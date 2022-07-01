import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { storeEpisode } from "../features/mangaSlice";

function Mangabottom() {
  const dispatch = useDispatch();
  const episode = useSelector((state) => state.manga.episode);
  const state = episode;

  useEffect(()=>{
    if (state !== episode) {
      window.location.reload();
    }
  },[episode,state])
  return (
    <div className='manga_bottom'>
      <button type="button" onClick={() => dispatch(storeEpisode(episode-1))} className="manga_prev">prev</button>
      <button type="button" onClick={() => dispatch(storeEpisode(episode+1))} className="manga_next">next</button>
    </div>
  )
}

export default Mangabottom
