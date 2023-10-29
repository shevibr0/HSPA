import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserServiceService } from 'src/app/services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { AuthService } from 'src/app/services/auth.service';
  

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
    
  user!: any;
  userSubmitted!: boolean;
  constructor(
              private userService:UserServiceService,
              private authService: AuthService,
              private alertify: AlertyfyService,
               ) { }
     fb=inject(FormBuilder)
     registerationForm!: FormGroup;          
             
  ngOnInit() {
//    this.registerationForm =  this.fb.group({
//     userName: ['', Validators.required],
//     email: ['', [Validators.required, Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(8)]],
//     confirmPassword: ['', Validators.required],
//     mobile: ['', [Validators.required, Validators.maxLength(10)]]
//   }, this.passwordMatchingValidator);
   this.createRegisterationForm();
  // this.registerationForm.controls['userName'].setValue('Default Value');
  //}
  }
  
  createRegisterationForm() {
    this.registerationForm =  this.fb.group({
            userName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.compose([Validators.required, Validators.minLength(8)])]],
            confirmPassword: ['', Validators.required],
            mobile: ['', [Validators.required, Validators.maxLength(10)]]
          }, this.passwordMatchingValidator);
}



    passwordMatchingValidator(fg: FormGroup): Validators | null {
        if (!this.password || !this.confirmPassword) {
          return null; // Return null if either control is null
        }
        return this.password.value === this.confirmPassword.value ? null : { notmatched: true };
      }

  onSubmit() {
       console.log(this.registerationForm.value);
      this.userSubmitted = true;

      if (this.registerationForm.valid) {
        console.log("fffffffff")
        //this.user=Object.assign(this.user, this.registerationForm.value);
        this.userService.addUser(this.userData())
        this.registerationForm.reset()
        this.userSubmitted = false;
          this.authService.authUser(this.userData()).subscribe(() =>
            {
              this.onReset();
               this.alertify.success('Congrats, you are successfully registered');
            })}
               else{
                this.alertify.error('not')
               }
            
            };
            
        

  onReset() {
      this.userSubmitted = false;
      this.registerationForm.reset();
  }


  userData(): User{
      return this.user = {
          userName: this.userName.value,
          email: this.email.value,
          password: this.password?.value,
          mobile: this.mobile.value
      };
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
      return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
      return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
      return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
      return this.registerationForm.get('mobile') as FormControl;
  }
  // ------------------------

}
