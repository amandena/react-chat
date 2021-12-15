import './App.css'
import { ChatEngine } from 'react-chat-engine' 
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm'

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm/>
  
  return (
    <div className='App'>
      <ChatEngine
        height='100vh'
        projectID='2f404c36-a292-40e5-a1b9-9a6d84be940e'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  )
}

export default App
