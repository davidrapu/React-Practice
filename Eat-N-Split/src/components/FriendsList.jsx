import Button from "./Button";
import UserCard from "./UserCard"

export default function AddFriend({isOpen, friendList}){
  return (
    <ul>
      {friendList.map((v) => (
        <UserCard key={v.id} friendObj={v} />
      ))}
    </ul>
  );
}