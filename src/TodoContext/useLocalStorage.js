import { useState, useEffect } from 'react'

function useLocalStorage (itemName, initialValue) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parseItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parseItem = initialValue
        } else {
          parseItem = JSON.parse(localStorageItem)
        }

        setItem(parseItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }, 1000)
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  return { item, saveItem, loading, error }
}

export default useLocalStorage
