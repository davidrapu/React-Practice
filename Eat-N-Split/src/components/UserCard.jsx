import Button from "./Button";

export default function UserCard({friendObj}){
    // id: 118836,
    // name: "Clark",
    // image: "https://i.pravatar.cc/48?u=118836",
    // balance: -7,
    return (
        <li>
            <img src={friendObj.image} alt={friendObj.name} />
            <h3> {friendObj.name} </h3>
            {friendObj.balance < 0 && <p className="red">You owe {friendObj.name} ${Math.abs(friendObj.balance)} </p>}
            {friendObj.balance > 0 && <p className="green">{friendObj.name} owes you ${friendObj.balance} </p>}
            {friendObj.balance === 0 && <p>You and {friendObj.name} are even </p>}
            <Button>Select</Button>
        </li>
    )
}