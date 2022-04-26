import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  
    data:any={name: '', user_type: 'Mentor', entity:'Company', status:'active'}
  constructor(
    public dialogRef: MatDialogRef<AddCompanyComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }


  ngOnInit(): void {
  }

  
  submitDialog(){
    console.log(this.data)
    this.dialogRef.close(this.data );
  }
  
  closeDialog(){
    this.dialogRef.close();
  }

}
