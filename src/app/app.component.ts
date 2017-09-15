import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword:"",
    address: "",
    uApt: "",
    city: "",
    state: "",
    lucky: ""
  }
  allStates: string[] =  [ "AK",
                      "AL",
                      "AR",
                      "AS",
                      "AZ",
                      "CA",
                      "CO",
                      "CT",
                      "DC",
                      "DE",
                      "FL",
                      "GA",
                      "GU",
                      "HI",
                      "IA",
                      "ID",
                      "IL",
                      "IN",
                      "KS",
                      "KY",
                      "LA",
                      "MA",
                      "MD",
                      "ME",
                      "MI",
                      "MN",
                      "MO",
                      "MS",
                      "MT",
                      "NC",
                      "ND",
                      "NE",
                      "NH",
                      "NJ",
                      "NM",
                      "NV",
                      "NY",
                      "OH",
                      "OK",
                      "OR",
                      "PA",
                      "PR",
                      "RI",
                      "SC",
                      "SD",
                      "TN",
                      "TX",
                      "UT",
                      "VA",
                      "VI",
                      "VT",
                      "WA",
                      "WI",
                      "WV",
                      "WY"];
  allUsers: any[] = [];
  success: string = '';
  notMatch: string = '';
  day: string = ""
  onSubmit(){
    if (this.user.password != this.user.cPassword){
      this.notMatch = "Passwords must Match!"
    }
    else{
      this.notMatch = "";
    this.success = "Thank you for registering with us " + this.user.firstName + ". We just sent you a confirmation email at " + this.user.email + ", and we will send mail to " 
    + this.user.address + this.user.uApt + ", " + this.user.city + " " + this.user.state + "." 
    this.day = 'Have a wonderful day!'
    }
  }
}
