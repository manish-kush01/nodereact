import { useState, useEffect } from 'react';
import Gallery from './Gallery.js'
import Card from './Card.js'
import Clock from './Clock.js';
const today = new Date();

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};


function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}


export default function App(){
  const myname="Manish";
  const time = useTime();
  const [color,setcolor]=useState('lightcoral');
  return (
  <div>
    <div>
      <p>
        Pick a color:{' '}
        <select value={color} onChange={e=> setcolor(e.target.value)}>
          <option value={'lightcoral'}>lightcoral</option>
          <option value={'red'}>red</option>
          <option value={'blue'}>blue</option>
        </select>
      </p>
      <Clock color={color} time={time.toLocaleTimeString()}></Clock>
    </div>

    <div>
      <Card>
      <h1>Hedy Lamarr's Todos</h1>
      <img src={baseUrl+person.imageId+person.imageSize+'.jpg'} 
        alt="Hedy Lamarr" 
        classname="photo" 
        width={100}
        height={100}
        />
      </Card>

      <ul style={{backgroundColor: 'black',
      color: 'pink'}}>
      <li>{myname} Invent new traffic lights</li>
      <li>Rehearse a movie scene at {formatDate(today)}</li>
      <li>Improve the spectrum technology</li>
      </ul>
    </div>
      <Gallery backgroundColor='red' size={100}/>
      <Gallery backgroundColor='red' size={80}/>
      <Gallery backgroundColor='red' size={50}/>
  </div>
  )
}