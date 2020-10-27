import React, { useState } from 'react'
import uuidv1 from 'uuid/v1'
import useLocalStorage from './useLocalStorage'
import readingLocalStorage from './readingLocalStorage'
import { LS_MESSAGES_KEY } from './constants'

function App() {
  const [messageState, setMessageState] = useState('')

  const messagesInLS = readingLocalStorage()

  const [messagesState, setMessagesState] = useState(messagesInLS)
  useLocalStorage(messagesState)

  const onChangeInputMessageHandler = e => {
    setMessageState(e.target.value)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    setMessageState('')
    addMessage(e)
  }

  const addMessage = () => {
    setMessagesState([
      ...messagesState,
      {
        id: uuidv1(),
        message: messageState
      }
    ])
  }

  // We are using just one key... LS_MESSAGES_KEY
  const deleteKeyFromLS = () => {
    setMessagesState([])
    localStorage.removeItem(LS_MESSAGES_KEY)
  }

  let messageList = null
  messageList = messagesState.map(message => <li key={message.id}> {message.message} </li>)

  return (
    <React.Fragment>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="message"> Add a message: </label>{' '}
        <input name="message" value={messageState} onChange={onChangeInputMessageHandler} /> <button> Add! </button>{' '}
      </form>{' '}
      <ul> {messageList} </ul> <hr />
      <button onClick={deleteKeyFromLS}> Clear All! </button>{' '}
    </React.Fragment>
  )
}

export default App
