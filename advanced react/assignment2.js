import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    // we can call a function in new component in  we pass data as a parameter, Can communicate the component to app.

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };
    return ( <
        div className = "new-expense" > {!isEditing && ( <
                button onClick = { startEditingHandler } > Add NewButton < /button>
            )
        } {
            isEditing && ( <
                ExpenseForm onSaveExpenseData = { saveExpenseDataHandler }
                onClick = { stopEditingHandler }
                />
            )
        } <
        /div>
    );
};

export default NewExpense;
