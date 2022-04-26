import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCompanyComponent} from '../add-company/add-company.component'
import mentor from '../mentor.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
displayedColumns: string[] = [ 'first_name', 'user_type', 'entity', 'status', 'action'];
  dataSource = mentor;
  constructor(public dialog: MatDialog) { }

  result
  ngOnInit(): void {
    console.log(this.dataSource)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '50vw',
      backdropClass: 'dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {name: '', user_type: '', entity:'', status:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dataSource.push(result)
      this.result = result;
    });
  }

  
  edit(): void {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '50vw',
      backdropClass: 'dialog-backdrop-class',
      panelClass: 'custom-dialog-panel-class',
      data: {
        name: this.dataSource.first_name, 
        // user_type: this.dataSource.company.user_type, 
        // entity:this.dataSource.company.name, 
        status:this.dataSource.user_status},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
    });
  }
}



