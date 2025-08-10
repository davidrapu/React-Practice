import Button from './Button.jsx'
import { useState } from 'react';

export default function AddFriendForm({isOpen, setFriends}) {
  // states
  const [friendName, setFriendName] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  // id: 118836,
  // name: "Clark",
  // image: "https://i.pravatar.cc/48?u=118836",
  // balance: -7,
  function handleFormSubmit(e) {
    e.preventDefault()
    if (friendName && imageUrl){
      setFriends(v => {
        const newFriend = {
          id: Math.floor(Math.random() * 999999) + 100000,
          name: friendName,
          image: imageUrl,
          balance: 0
        }
        const newFriends = [...v, newFriend]
        return newFriends
      })
    }
  }
  function handleNameChange(e) {
    setFriendName(e.target.value)
  }
  function handleImageUrlChange(e){
    setImageUrl(e.target.value)
  }
  
  return (
    <form onSubmit={handleFormSubmit}
      style={{ display: isOpen ? "" : "none" }}
      className="form-add-friend"
    >
      <label>🧑‍🤝‍🧑 Friend Name</label>
      <input onChange={handleNameChange} value={friendName} type="text" />

      <label>🍱 Image URL</label>
      <input onChange={handleImageUrlChange} value={imageUrl} type="text" />

      <Button>Add</Button>
    </form>
  );
}
