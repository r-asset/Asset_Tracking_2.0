
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';


export interface TrolleyData {
  sno: string;
  name: string;
  condition: string;
  category: string;
  status: string;
  location: string;
  lastseen: string;
}

const ELEMENT_DATA: TrolleyData[] = [
  {sno: '01', name: 'Trolleys', condition: 'Available', category: 'Shipping', status: 'In Production', location: 'MATE III - IN',lastseen:'25 MAY 2024, 12.45 A.M'},
]


@Component({
  selector: 'app-recent-transactions',
  imports:[MatTableModule],
  standalone: true,
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent {
  displayedColumns: string[] = ['sno', 'assetName', 'condition','category','status','location','lastseen'];
  dataSource = ELEMENT_DATA;
}
