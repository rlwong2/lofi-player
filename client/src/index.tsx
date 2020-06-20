import React, { FunctionComponent, useState, useEffect } from "react";
import * as ReactDOM from 'react-dom';
import config from '../../config'

import { Player } from "./components/player";

type AppProps = {

}

export const App:FunctionComponent = () => {
    const [ video, setVideo ] = useState({});
    const [ title, setTitle ] = useState('lofi radio');
    const [ key, setkey ] = useState(config.KEY)

    useEffect(() => {
        document.title = `lofi radio || now playing: ${title}`;
      }, [title])

    return(
        <div>
            <Player video={video} title={title} />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('App'))