import React, {Component} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

class NewExpense extends Component {
	
	AddData(data) {
		const  objectWithId = {
			...data,
			id:Math.random().toString()
		}
	this.props.onAddDataToArray(objectWithId)
	}

	render() {
		return (
		<div className='new-expense'>
			<ExpenseForm onAddData={this.AddData.bind(this)}/>
		</div>
		)
	}
}
export default NewExpense