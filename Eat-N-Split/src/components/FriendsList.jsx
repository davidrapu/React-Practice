import Button from "./Button";
import UserCard from "./UserCard"

export default function AddFriend({friendList, selectedFriendId, setSelectedFriendId}){
  return (
    <ul>
      {friendList.map((v) => (
        <UserCard key={v.id} friendObj={v} setSelectedFriendId={setSelectedFriendId} selectedFriendId={selectedFriendId} />
      ))}
    </ul>
  );
}