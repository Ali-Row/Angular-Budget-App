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
    budgetTotal: number = 100.00;

    expenses: Expenses[] = [];

    updateBudgetAmount(budget: number): void {
        console.log(budget)
        this.budgetTotal = budget;
    }

}
