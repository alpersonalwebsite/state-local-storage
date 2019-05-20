import { LS_MESSAGES_KEY } from './constants'

const readingLocalStorage = () => {
  const readMessagesInLS = () => {
    const messagesInLS = JSON.parse(localStorage.getItem(LS_MESSAGES_KEY))
    return messagesInLS || []
  }
  return readMessagesInLS()
}

export default readingLocalStorage
