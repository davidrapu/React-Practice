import FriendsList from "./components/FriendsList";
import Button from "./components/Button";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";
import { useState } from "react";
  const friendsList = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
export default function App() {
  const [friends, setFriends] = useState(friendsList)
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenForm(){
    setIsOpen((v) => (!v))
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friendList={friends} />
        <AddFriendForm setFriends={setFriends} isOpen={isOpen} />
        <Button onClick={handleOpenForm}> {isOpen ? "Close" : "Add Friend"} </Button>
      </div>
      <SplitBillForm />
    </div>
  );
}
