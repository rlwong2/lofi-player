import * as React from "react";
import ReactPlayer from 'react-player';


function Player(props) {
        return(
            <div>
                <ReactPlayer url={props.video_url} />
            </div>
        ) 
}

export default Player;