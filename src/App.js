import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
import useLocalStorage from './useLocalStorage'
import readingLocalStorage from './readingLocalStorage'

function App () {
  const [messageState, setMessageState] = useState('')

  const messagesInLS = readingLocalStorage()

  const [messagesState, setMessagesState] = useState(messagesInLS)
  useLocalStorage(messagesState)

  const onChangeInputMessageHandler = (e) => {
    setMessageState(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setMessageState('')
    addMessage(e)
  }

  const addMessage = (e) => {
    setMessagesState([...messagesState, { id: uuidv1(), message: messageState }])
  }

  let messageList = null
  messageList = messagesState.map((message) => <li key={message.id}>{message.message}</li>)

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <label>Add a message</label>
        <input value={messageState} onChange={onChangeInputMessageHandler} />
        <button>Add!</button>
      </form>
      <ul>
        {messageList}
      </ul>
    </React.Fragment>
  )
}

export default App
