import React from 'react';
import ReactDOM from 'react-dom';
import { Player } from "./player";
import KEY from '../../../config';

export const App = () => {
    const [ video, setVideo ] = useState({});
    const [ title, setTitle ] = useState('lofi radio');
    const [ key, setkey ] = useState(KEY)

    useEffect(() => {
        document.title = `lofi radio || now playing: ${title}`;
      }, [title])

    return(
        <div>
            <Player video={video} title={title} />
        </div>
    )
};