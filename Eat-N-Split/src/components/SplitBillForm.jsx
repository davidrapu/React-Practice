import Button from './Button.jsx'

export default function SplitBillForm(){
    return <form className='form-split-bill'>
        <h2>SPLIT BILL WITH X</h2>
        <label>💰 Bill Value</label>
        <input type='text' />

        <label>🧍‍♀️ Your Expense</label>
        <input type='text' />

        <label>🧑‍🤝‍🧑 X's expense</label>
        <input type='text' disabled />

        <label>🤑 Who is paying the bill</label>
        <select>
            <option>You</option>
        </select>

        <Button>Split Bill</Button>
    </form>
}