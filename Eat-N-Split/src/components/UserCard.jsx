import Button from "./Button";

export default function UserCard({friendObj, setSelectedFriendId, selectedFriendId}){
    // handlers
    function handleSelect(){
        setSelectedFriendId(id => {
            if (id === friendObj.id) return null;
            return friendObj.id;
        });
    }
    return (
        <li>
            <img src={friendObj.image} alt={friendObj.name} />
            <h3> {friendObj.name} </h3>
            {friendObj.balance < 0 && <p className="red">You owe {friendObj.name} ${Math.abs(friendObj.balance)} </p>}
            {friendObj.balance > 0 && <p className="green">{friendObj.name} owes you ${friendObj.balance} </p>}
            {friendObj.balance === 0 && <p>You and {friendObj.name} are even </p>}
            <Button 
            className={friendObj.id === selectedFriendId ? "selected" : ""} 
            onClick={handleSelect}>
                {friendObj.id === selectedFriendId ? "Close" : "Select"}
            </Button>
        </li>
    )
}