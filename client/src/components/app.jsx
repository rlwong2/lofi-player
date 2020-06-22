import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from "./player.jsx";
import KEY from '../../../config.js';

function App() {
    const [ video_url, setVideo_url ] = useState('https://www.youtube.com/embed/5qap5aO4i9A');
    const [ video_id, setVideo_id ] = useState('5qap5aO4i9A');
    const [ video_title, setVideo_title ] = useState('lofi hip hop radio - beats to relax/study to');
    const [ key, setKey ] = useState(KEY)

    useEffect(async () => {
        document.title = `lofi radio || ${video_title}`;
        let result = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${video_id}&key=${key}`)
        console.log(result.data.items[0].snippet.title)

        setVideo_url(`https://www.youtube.com/embed/${result.data.items[0].id}`);
        setVideo_id(result.data.items[0].id);
        setVideo_title(result.data.items[0].snippet.title);
        
      }, [])

    return(
        <div>
            <Player video_url={video_url} video_title={video_title} />
        </div>
    )
};

export default App;