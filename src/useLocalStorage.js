import { useEffect } from 'react'
import { LS_MESSAGES_KEY } from './constants'

const useLocalStorage = messagesValues => {
  useEffect(() => {
    const beforeUnloadHanlder = () => {
      localStorage.setItem(LS_MESSAGES_KEY, JSON.stringify(messagesValues))
    }

    window.addEventListener('beforeunload', beforeUnloadHanlder)
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHanlder)
    }
  })

  return null
}

export default useLocalStorage
