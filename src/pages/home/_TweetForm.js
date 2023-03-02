import { useState } from 'react'
import { api, errorHandler } from '@/utils/api'
import styles from '@/styles/Home.module.css'

export default function TweetForm() {
  const [tweetInput, setTweetInput] = useState({
    name: '',
    message: '',
  })

  function handleTweetChange(e) {
    setTweetInput({
      ...tweetInput,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!tweetInput.name || !tweetInput.message) return

    try {
      const response = await api.post('v1/tweet', {
        name: tweetInput.name,
        message: tweetInput.message,
      });
      const { data } = response.data
      // console.log('POST tweet:', data)
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <>
      <div className="tweetInputWrapper">
        <h2>Your Tweet</h2>
        <form>
          <div className={styles.formGroup}>
            <input type="text" value={tweetInput.name} placeholder="name" name="name" onChange={e => handleTweetChange(e)} required />
          </div>
          <div className={styles.formGroup}>
            <textarea value={tweetInput.message} placeholder="message" name="message" onChange={e => handleTweetChange(e)} required />
          </div>
          <button type="submit" onClick={handleSubmit}>Send</button>
        </form>
      </div>
    </>
  )
}
