import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReportService } from '../../service/report.service';
import { Table } from 'primeng/table';
import { SettingsService } from 'src/app/settings/Add-ons/service/settings.service';
import { HttpClient } from '@angular/common/http';
import * as XLSX from "xlsx-js-style";

@Component({
  selector: 'app-dwell-report',
  templateUrl: './dwell-report.component.html',
  styleUrls: ['./dwell-report.component.scss']
})
export class DwellReportComponent {
@ViewChild('dt', { static: true })
dt!: Table;
form: any;

sitesname: any = [];
zonesname: any = [];
areasname: any = [];
categoriesname: any = [];

pipe = new DatePipe('en-US');
DwellTable: any;
dwellSearch: any;
dwellValue: any;
operator: any;

maxDate!: Date ; 
siteurl = 'assets/site.json'
zoneurl = 'assets/zone.json'
areaurl = 'assets/area.json'
categoryurl = 'assets/category.json'


displaytable: boolean=false;
showloader: boolean=false;

constructor(private fb: FormBuilder,private service: ReportService,private settingsService: SettingsService,private http: HttpClient){
  this.dwellSearch = [
    {name: 'Minutes', code: 'Minutes'},
    {name: 'HOURS',   code: 'HOURS'},
    {name: 'DAYS',    code: 'DAYS'},
    {name: 'MONTHS',  code: 'MONTHS'},
  ];
  this.dwellValue = [
    {name: 'Equals',               code: 'EQUALS'},
    {name: 'Not Equals',           code: 'NOT EQUALS'},
    {name: 'Less Than',            code: 'LESS THAN'},
    {name: 'Less Than Or Equals',  code: 'LESS THAN OR EQUALS'},
    {name: 'More Than',            code: 'MORE THAN'},
    {name: 'More Than Or Equals',  code: 'MORE THAN OR EQUALS'},
  ];
  this.operator = [
    {name: 'NONE',  code: 'NONE'},
    {name: 'AND',   code: 'AND'},
    {name: 'OR',    code: 'OR'},
  ];
 
}
 ngOnInit(): void {
  this.http.get(this.siteurl).subscribe(res=>{
      this.sitesname=res

      let sitename: string[] =[]
      for(const res of this.sitesname){
        sitename.push(res.sc_name)
      }
      console.log(sitename)  
      this.sitesname = sitename
  });

     this.http.get(this.areaurl).subscribe(res=>{
      this.areasname=res

      let areaname: string[] =[]
      for(const res of this.areasname){
        areaname.push(res.ar_name)
      }
      console.log(areaname) 
      this.areasname = areaname
     });

     this.http.get(this.zoneurl).subscribe(res=>{
      this.zonesname=res

      let zonename: string[] =[]
      for(const res of this.zonesname){
        zonename.push(res.zn_name)
      }
      console.log(zonename)
      
      this.zonesname = zonename
     });
     this.http.get(this.categoryurl).subscribe(res=>{
      this.categoriesname=res

      let categoryname: string[] =[]
      for(const res of this.categoriesname){
        categoryname.push(res.cm_name)
      }
      console.log(categoryname) 
      this.categoriesname = categoryname
     }); 
  // this.settingsService.getData("businesslocations/site").subscribe(res=>{
  //   this.sites=res
  //  });
  // this.settingsService.getData("businesslocations/zone").subscribe(res=>{
  //   this.zones=res
  //  });
  // this.settingsService.getData("businesslocations/area").subscribe(res=>{
  //   this.areas=res
  //  });
  //   this.settingsService.getData("category/data").subscribe(res=>{
  //     this.category=res
  // });
          

  this.form = this.fb.group({
    dr_frmdte:   ['',Validators.required],
    dr_todte:   ['',Validators.required],
    dr_siteid: ['',Validators.required],
    dr_areaid: ['',Validators.required],
    dr_zoneid: ['',Validators.required],
    dr_dwelltype: ['',Validators.required],
    dr_category:['',Validators.required],
    dr_logicaloperator: ['',Validators.required],
    dr_dwelloperator1: ['',Validators.required],
    dr_dwelloperand1: [0],
    dr_dwelloperator2: ['',Validators.required],
    dr_dwelloperand2: [0]  
  });

  }
  openfilter(){
    this.showloader = false
    this.displaytable = !this.displaytable
  }

  applyFilterGlobal($event:any, stringValue:any){
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringValue);
  }
OnSubmit(){
  this.showloader = true;
  this.displaytable = !this.displaytable

  console.log(this.form.value)

  let fromDate=this.pipe.transform(this.form.value.dr_frmdte,"yyyy-MM-dd")
  let toDate=this.pipe.transform(this.form.value.dr_todte,"yyyy-MM-dd")

  this.form.controls['dr_frmdte'].setValue(fromDate);
  this.form.controls['dr_todte'].setValue(toDate); 

  this.service.postData('virtualreport/dwelltime',this.form.value).subscribe(res => {
    this.DwellTable = res
  })
  this.showloader=false
}
exportExcel(){
  const table = document.getElementById('dom');

  if (!table) {
    console.error("The table element with ID 'dom' does not exist.");
    return; 
  }

  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet([]);

  const merge = [
     { s: { r: 1, c: 1 }, e: { r: 2, c: 6 } }, 
   ];
   ws['!merges'] = merge;
   XLSX.utils.sheet_add_aoa(ws, [['Dwell Report Details']], { origin: 'B2' });

   
   // Leave 2 empty rows
   XLSX.utils.sheet_add_aoa(ws, [['']], { origin: 'B3' });
   XLSX.utils.sheet_add_aoa(ws, [['']], { origin: 'B4' });
 
   const headerRow = table.querySelector('thead tr');

   if (headerRow) {
    const headerData = [];
    const headerCells = headerRow.getElementsByTagName('th');
    for (let i = 0; i < headerCells.length ; i++) {
      headerData.push(headerCells[i].textContent);
    }
    XLSX.utils.sheet_add_aoa(ws, [headerData], { origin: 'B5' });
  }

  const tableData = [];
  const rows = table.querySelectorAll('tbody tr');
  for (let i = 0; i < rows.length; i++) {
   const rowData = [];
   const cells = rows[i].getElementsByTagName('td');
   for (let j = 0; j < cells.length ; j++) {
     // Skip the first and last cells in each row
     rowData.push(cells[j].textContent);
    }
    tableData.push(rowData);
  }
  XLSX.utils.sheet_add_aoa(ws, tableData, { origin: 'B6' });

  for (var i in ws) {
    if (typeof ws[i] != 'object') continue;
      let cell = XLSX.utils.decode_cell(i);   

      ws[i].s = {
            font: {
              italic: true,
            },
            alignment: {
              vertical: 'center',
              horizontal: 'center', 
            },
            border: {
              right: {style: 'thin'},
              left: {style: 'thin'}, 
              top : {style: 'thin'},
              bottom: {style: 'thin'},
            },
           
          }
          if (cell.r == 1) {
            ws[i].s = {
              font: {
                // italic: true,
                sz:'15',
                color:{ rgb: 'FF0000' },
              },
              alignment: {
                vertical: 'center',
                horizontal: 'center', 
              },
            }
          }
          // heading row
          if (cell.r == 4) {
            ws[i].s = {
              font: {
                bold:true,
                color:{ rgb: 'fffcfd' },
              },
              alignment: {
                vertical: 'center',
                horizontal: 'center', 
              },
              border: {
                right: {style: 'thin'},
                left: {style: 'thin'}, 
                top : {style: 'thin'},
                bottom: {style: 'thin'},
              },
            }
            ws[i].s.fill = {
                  // background color
                    patternType: 'solid',
                    fgColor: { rgb: 'ff3030' },
                    bgColor: { rgb: 'ff3030' },
                  };
          }

  }

  const cellB4 = 'B4';
  const cellB4Style = {
    border: {
      top: { style: 'none' }, 
      bottom: { style: 'none' }, 
      left: { style: 'none' }, 
      right: { style: 'none' }, 
    },
  };
  ws[cellB4].s = cellB4Style;


  XLSX.utils.book_append_sheet(wb,ws);
  XLSX.writeFile(wb,'Dwell_Report.xlsx')
}
}
