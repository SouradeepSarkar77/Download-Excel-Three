import { Component } from '@angular/core';
import { ExcelService } from './excel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Download-Excel-Three';

  data = [
    [2019, 1, '50', '20', '25', '20'],
    [2019, 2, '80', '20', '25', '20'],
    [2019, 3, '120', '20', '25', '20'],
    [2019, 4, '75', '20', '25', '20'],
    [2019, 5, '60', '20', '25', '20'],
    [2019, 6, '80', '20', '25', '20'],
    [2019, 7, '95', '20', '25', '20'],
    [2019, 8, '55', '20', '25', '20'],
    [2019, 9, '45', '20', '25', '20'],
    [2019, 10, '80', '20', '25', '20'],
    [2019, 11, '90', '20', '25', '20'],
    [2019, 12, '110', '20', '25', '20'],
  ];

  constructor(private excelService: ExcelService){
  }

  generateExcel() {

    // console.log('called');
     this.excelService.generateExcel();
   }
}
