import { useState } from "react"
import { Tweet } from "./components/Tweet"

import './components/App.css'
import { AppRoutes } from "./Routes";

 function App() {
//   const [tweets, setTweets] = useState<string[]>([
//     'Tweet 1',
//     'Tweet 2',
//     'Tweet 3',
//     'Tweet 4',
//   ]);

//   function createTweet() {
//     setTweets([...tweets, 'Tweet 5'])
//   }

  return (
    // <div>
    //   {
    //     tweets.map(tweets => {
    //       return <Tweet text= {tweets}/>
    //     })
    //   }
    //   <button onClick={createTweet}
    //   style = {
    //     {
    //       background: '#8257e6',
    //       border: 0,
    //       padding: '6px, 12px'
    //     }
    //   }
    //   >Adicionar um novo tweet</button>
    // </div>

    <AppRoutes />
  )
}

export default App
