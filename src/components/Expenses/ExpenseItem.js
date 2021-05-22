import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 4, 19);
    // const expenseTitle = 'Car Insurance';
    // const expensePrice = 250;
    
    return (
    <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    </li>
    );
}

export default ExpenseItem