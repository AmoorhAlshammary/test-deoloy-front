import { useHistory } from 'react-router-dom';
import sample from '../assets/videos/background_video.mp4';
import './Home.css';



export default function Home() {
    const history = useHistory();
    const gotToDecoration = ()=>{
        history.push('/decoration');
    }
    return (
        <div>
           <video className='videoTag' autoPlay loop muted >
                <source src={sample} type='video/mp4' />
                <source src={sample} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Amirah for Decorations</h1>
                <p>is where style lives. It is the ultimate guide to decorating and design and the indispensable go-to source for everyone who wants to create a more beautiful life.

Whether your taste is classic or contemporary—or an eclectic mix of both—you'll find ideas and inspiration, the latest information and products, and tools to help you decorate, renovate, and entertain stylishly.</p>
                <button id="myBtn" onClick={()=>gotToDecoration()}>SEE MORE</button>
            </div>
        </div>
    )
}
