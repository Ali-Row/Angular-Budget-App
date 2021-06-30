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
    expenses: Expenses[] = [];

    // This function updates the "Total Monthly Funds" number at the top of the page
    updateBudgetAmount(budget: number): void {
        this.budgetTotal = budget;
        this.evaluateActualPercentage();
    }

    addExpense(): void {
    // Make sure the user actually fills out all of the fields on the form
    // if(!this.input.expenseName || !this.input.costAmount || !this.input.desiredPercentage) return alert("Please fill out all of the fields before adding!");

    let newExpenseObj: Expenses = {
        id: this.newUuid(),
        expenseName: this.input.expenseName,
        costAmount: this.input.costAmount,
        priority: this.input.priority,
        desiredPercentage: this.input.desiredPercentage,
        actualPercentage: 0
    }

    this.expenses.push(newExpenseObj);

    this.evaluateActualPercentage();

    // this.updateExistingExpense();
    }

    resetExpense(): void {
       this.input = {
        id: "",
        expenseName: "",
        costAmount: 0,
        priority: "Medium",
        desiredPercentage: 0,
        actualPercentage: 0
       } 
    }

    editRow(data: Expenses): void {
        console.log(data)
        this.input = Object.assign({}, data);
    }
    deleteRow(data: Expenses): void {
        this.expenses = this.expenses.filter((entry: Expenses) => entry.id != data.id);
    }
    
    // This function generates a unique ID
    newUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 16 | 0, res = c == 'x' ? r : (r & 0x3 | 0x8);
          return res.toString(16);
        });
    }

    updateExistingExpense(): void {
        let existingData = this.expenses.find((entry: Expenses) => entry.id === this.input.id);
        console.log("existing data =>", existingData);
        if (!existingData) return alert("Click edit first!");

        existingData.expenseName = this.input.expenseName;
        existingData.costAmount = this.input.costAmount;
        existingData.priority = this.input.priority;
        existingData.desiredPercentage = this.input.desiredPercentage;

        this.evaluateActualPercentage();
    }

    evaluateActualPercentage(): void {
        this.expenses.map((entry: Expenses) =>  Math.floor(entry.actualPercentage = entry.costAmount * 100 / this.budgetTotal));
        
    }
      
}
