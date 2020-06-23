import * as React from "react";
import ReactPlayer from 'react-player';


function Player(props) {
        return(
            <div>
                <ReactPlayer 
                    url={props.video_url} 
                    config={{
                        youtube: {
                          playerVars: { showinfo: 0, autoplay: 1 }
                        }
                      }}
                />
            </div>
        ) 
}

export default Player;