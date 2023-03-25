import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

  function ExpenseItem(props){
 

    return (
      <div>
      <div className='expense-item'>

      <ExpenseDate date ={props.date} />
      
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
      
      </div>
      </div>
    );
  }
 
  export default ExpenseItem