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



export class BudgetComponent implements OnInit {
    ngOnInit(): void {};
    constructor() { };

    budgetInput: number = 100;
    budgetTotal: number = 100;
    expenses: Expenses[] = [];

    input: Expenses = {
        id: "",
        expenseName: "",
        costAmount: 0,
        priority: "Medium",
        desiredPercentage: 0,
        actualPercentage: 0
    }

    updateBudgetAmount(budget: number): void {
        this.budgetTotal = budget;
    }

    addExpense(): void {

        // Make sure the user actually fills out all of the fields on the form
        if(!this.input.expenseName || !this.input.costAmount || !this.input.desiredPercentage) return alert("Please fill out all fields!");

        let newExpenseObj: Expenses = {
            id: this.newUuid(),
            expenseName: this.input.expenseName,
            costAmount: this.input.costAmount,
            priority: this.input.priority,
            desiredPercentage: this.input.desiredPercentage,
            actualPercentage: 0
        }

        this.expenses.push(newExpenseObj);
        console.table(newExpenseObj);
    }
    cancelExpense(): void {

    }

    newUuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          let r = Math.random() * 16 | 0, res = c == 'x' ? r : (r & 0x3 | 0x8);
          return res.toString(16);
        });
    }
      
}
