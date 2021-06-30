import { Component, OnInit } from "@angular/core";

interface Expenses {
    id: string,
    expenseName: string,
    costAmount: number,
    priority: string,
    desiredPercentage: number,
    actualPercentage: number
}

@Component({
  selector: "app-budget",
  styleUrls: ["./budget.component.scss"],
  templateUrl: "./budget.component.html"
})

// Export the BudgetComponent class
export class BudgetComponent implements OnInit {
    constructor() {};
    ngOnInit(): void {};
   
    budgetInput: number = 100;
    budgetTotal: number = 100;

    input: Expenses = {
        id: "",
        expenseName: "",
        costAmount: 0,
        priority: "Medium",
        desiredPercentage: 0,
        actualPercentage: 0
    }

    expenseInputHeading: string = "Add A New Expense";
    expenses: Expenses[] = [];

    // This function updates the "Total Monthly Funds" number at the top of the page
    updateBudgetAmount(budget: number): void {
        this.budgetTotal = budget;
        this.evaluateActualPercentage();
    }

    // When called this function adds the newly added expense to the expenses array and the data gets displayed on the page
    addExpense(): void {
    // Make sure the user actually fills out every field on the form...
    if(!this.input.expenseName || !this.input.costAmount || !this.input.desiredPercentage) return alert("Please fill out all of the fields before adding!");
    // Create a new object that holds the expenses data coming from the input fields
    let newExpenseObj: Expenses = {
        id: this.newUuid(),
        expenseName: this.input.expenseName,
        costAmount: this.input.costAmount,
        priority: this.input.priority,
        desiredPercentage: this.input.desiredPercentage,
        actualPercentage: 0
    }
    // Push the new expenses object to the expenses array
    this.expenses.push(newExpenseObj);
    this.evaluateActualPercentage();
    this.resetExpense();
    }

    // Reset the expenses modal to default values
    resetExpense(): void {
       this.input = {
        id: "",
        expenseName: "",
        costAmount: 0,
        priority: "Medium",
        desiredPercentage: 0,
        actualPercentage: 0
       } 

       this.expenseInputHeading = "Add A New Expense"
    }
    
    // This function generates a unique ID
    newUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 16 | 0, res = c == 'x' ? r : (r & 0x3 | 0x8);
          return res.toString(16);
        });
    }
    // When the update button is clicked this will be called
    updateExistingExpense(): void {
        let existingData = this.expenses.find((entry: Expenses) => entry.id === this.input.id);

        if (!existingData) return alert("Click edit first!");
        // Mutate the data in the existingData object with our new data from the input fields
        existingData.expenseName = this.input.expenseName;
        existingData.costAmount = this.input.costAmount;
        existingData.priority = this.input.priority;
        existingData.desiredPercentage = this.input.desiredPercentage;

        this.evaluateActualPercentage();
        this.resetExpense();
    }

    // This function works out the actual percentage based on the entered cost vs the actual monthly budget
    evaluateActualPercentage = () => this.expenses.map((entry: Expenses) =>  Math.floor(entry.actualPercentage = entry.costAmount * 100 / this.budgetTotal)); 

    // When the edit button is clicked this runs...
    editRow(data: Expenses): void {
        this.input = Object.assign({}, data);
        this.expenseInputHeading = "Update An Expense"
    } 
    // When the delete button is clicked this runs...
    deleteRow(data: Expenses): void {
        this.expenses = this.expenses.filter((entry: Expenses) => entry.id != data.id);
        // We want to reset the expense modal to default if there is nothing left in the expenses array when deleting
        if (this.expenses.length === 0) return this.resetExpense();
    } 

}
