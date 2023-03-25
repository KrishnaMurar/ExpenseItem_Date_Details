import './ExpenseItem.css'

function ExpenseDetails(props){
const title = "Car wash";
const Amount = 520;

return (
    <div className = 'expense-item'>
        <div className = 'expense-item_description'>{title}</div>
        <div className = 'expense-item__price'>{Amount}</div>
    </div>
)
}

export default ExpenseDetails;