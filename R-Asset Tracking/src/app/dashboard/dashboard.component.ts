import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CustDetailsComponent } from './cust-details/cust-details.component';
import { HourlyDispatchComponent } from './hourly-dispatch/hourly-dispatch.component';
import { ItemsCategoryComponent } from './items-category/items-category.component';
import { AssetTableComponent } from './asset-table/asset-table.component';
import { MonthlyDispatchComponent } from './monthly-dispatch/monthly-dispatch.component';
import { AssetOutcomeComponent } from './asset-outcome/asset-outcome.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CustDetailsComponent, HourlyDispatchComponent,
     ItemsCategoryComponent,AssetTableComponent, MonthlyDispatchComponent, AssetOutcomeComponent,RecentTransactionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

}
