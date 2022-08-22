import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  user = {username: '', password: '', remember: false};
  // constructor(public dialogRef: MatDialogRef<LoginComponent>) { }
  constructor(public dialogRef: MatDialogRef<LoginComponent>, public fb:FormBuilder) { }
  form = this.fb.group({
    'username' : [this.user.username,Validators.required],
    'password' : [this.user.password, [Validators.required,Validators.minLength(6)]],
    'remember' : [this.user.remember]
  });
  ngOnInit(): void {
  }

  onSubmit(){
    console.log('User: ', this.form.value);
    this.dialogRef.close(); // close dialog box
  }

  get username(){
    return this.form.get('username');
  }


}
