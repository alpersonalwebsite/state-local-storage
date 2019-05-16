import { LS_MESSAGES_KEY } from './constants'

const useReadingLocalStorage = () => {
  const readMessagesInLS = () => {
    const messagesInLS = JSON.parse(localStorage.getItem(LS_MESSAGES_KEY))
    console.log('LS_MESSAGES_KEY', messagesInLS)
    return messagesInLS
  }
  return readMessagesInLS()
}

export default useReadingLocalStorage
