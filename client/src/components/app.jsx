import React from 'react';
import ReactDOM from 'react-dom';
import { Player } from "./player.jsx";
import KEY from '../../../config';

function App() {
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

export default App;