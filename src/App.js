import './App.css'
import { ChatEngine } from 'react-chat-engine' 

const App = () => {
  return (
    <div className='App'>
      <ChatEngine
        height='100vh'
        projectID='2f404c36-a292-40e5-a1b9-9a6d84be940e'
        userName='amandena'
        userSecret='123234345'
      />
    </div>
  )
}

export default App
