import { Component,OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



export interface TrolleyData {
  sno: string;
  assetName: string;
  site: string;
  zone: string;
  time: string;
  status: string;
}

const ELEMENT_DATA: TrolleyData[] = [
  {sno: '01', assetName: 'Trolleys', site: 'Site A', zone: 'MATE III - IN', time: '25 MAY 2024, 12.45 A.M', status: 'In Production'},
  {sno: '02', assetName: 'Trolleys', site: 'Site B', zone: 'MATE III - OUT', time: '25 MAY 2024, 12.45 A.M', status: 'Dispatched'},
  {sno: '03', assetName: 'Trolleys', site: 'Site C', zone: 'MATE III - IN', time: '25 MAY 2024, 12.45 A.M', status: 'In Production'},
  {sno: '04', assetName: 'Trolleys', site: 'Site D', zone: 'MATE III - OUT', time: '25 MAY 2024, 12.45 A.M', status: 'Dispatched'},
  {sno: '05', assetName: 'Trolleys', site: 'Site E', zone: 'MATE III - IN', time: '25 MAY 2024, 12.45 A.M', status: 'In Production'},
  {sno: '06', assetName: 'Trolleys', site: 'Site F', zone: 'MATE III - OUT', time: '25 MAY 2024, 12.45 A.M', status: 'Dispatched'}
];



@Component({
  selector: 'app-asset-table',
  standalone: true,
  imports: [ MatTableModule],
  templateUrl: './asset-table.component.html',
  styleUrls: ['./asset-table.component.css']
})
export class AssetTableComponent {
  displayedColumns: string[] = ['sno', 'assetName', 'site', 'zone', 'time', 'status'];
  dataSource = new MatTableDataSource<any> (ELEMENT_DATA);

  ngOnInit(){
    

  }
}
