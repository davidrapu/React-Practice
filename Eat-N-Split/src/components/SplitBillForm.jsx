import { flushSync } from 'react-dom';
import Button from './Button.jsx'
import { useState } from 'react';

export default function SplitBillForm({ selectedFriendId, setFriendsList, friendList }) {
  // Variables/constants
  let selectedFriend = friendList.find(
    (friend) => friend.id === selectedFriendId
  );

  // States
  const [bill, setBill] = useState(0);
  const [personalExpense, setPersonalExpense] = useState(0);
  const [friendExpense, setFriendExpense] = useState(0);
  const [payer, setPayer] = useState(0);

  // Handlers
  function handleBillChange(e) {
    setBill(Number(e.target.value));
  }
  function handlePersonalExpenseChange(e) {
    setPersonalExpense(Number(e.target.value));
  }
  function handleFriendExpenseChange(e) {
    setFriendExpense(Number(e.target.value));
  }
  function handlePayerChange(e) {
    setPayer(Number(e.target.value));
  }
  function handleSplitBill(e) {
    e.preventDefault();

    if (bill === 0) return;
    if (personalExpense === 0 && payer === 1) return; // You spent nothing and your friend is paying

    if (payer === 0) {
      // user is paying the bill, friend owes his/her expense
      selectedFriend.balance = selectedFriend.balance - friendExpense;
    }else{
        // friend is paying the bill, user owes his/her expense
        selectedFriend.balance = selectedFriend.balance + personalExpense;
    }

    setFriendsList(friends => {
        return friends.map(friend => {
            if (friend.id === selectedFriend.id){
                return selectedFriend
            }
            return friend
        })
    })
  }

  return (
    <form onSubmit={handleSplitBill} className="form-split-bill">
      <h2>
        SPLIT BILL WITH {selectedFriendId != null ? selectedFriend.name : "..."}
      </h2>
      <label>💰 Bill Value</label>
      <input type="number" value={bill} onChange={handleBillChange} />

      <label>🧍‍♀️ Your Expense</label>
      <input
        type="number"
        value={personalExpense}
        onChange={handlePersonalExpenseChange}
      />

      <label>
        🧑‍🤝‍🧑 {selectedFriendId != null ? selectedFriend.name : "..."}'s expense
      </label>
      <input
        type="number"
        value={selectedFriendId == null ? "" : friendExpense}
        onChange={handleFriendExpenseChange}
        disabled={selectedFriendId == null}
      />

      <label>🤑 Who is paying the bill</label>
      <select value={payer} onChange={handlePayerChange}>
        <option value={0}>You</option>
        <option value={1} disabled={selectedFriendId == null}>
          {selectedFriendId != null ? selectedFriend.name : "..."}
        </option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}