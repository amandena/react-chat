import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props, { chats, activeChat, userName, messages }) => {

  const chat = chats && chats[activeChat]
  console.log(chat, userName, messages)

  return (
    <div>
      ChatFeed
    </div>
  )
}

export default ChatFeed