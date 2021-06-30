import { Component, OnInit } from "@angular/core";

interface Expenses {
    id: number,
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
        id: 0,
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
        let newExpenseObj: Expenses = {
            id: 0,
            expenseName: this.input.expenseName,
            costAmount: this.input.costAmount,
            priority: this.input.priority,
            desiredPercentage: this.input.desiredPercentage,
            actualPercentage: 0
        }
        
        this.expenses.push(newExpenseObj);
    }
    cancelExpense(): void {

    }

}
