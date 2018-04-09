import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  date: Date; // from datetPicker 
  d: Date; // date system getting only H:M:S

  day: string; // to add 0 if day <= 9
  dayP: number; // getting days from datepicker

  month: string; // to add 0 if month <=9 
  monthP: number; // getting month from datepicker

  yearP: number; // getting year from datepicker

  hs: string;  // to add 0 if hours <= 9
  ms: string;  // to add 0 if minutes <= 9
  sds: string; // to add 0 if seconds <= 9

  h: number; // getting hours from date system
  m: number; // getting minutes from date system
  sd: number;// getting seconds from date system


  // function return string date time YYYY-MM-DD | HH:MM:SS
  getDate(): string{

  this.d = new Date(); // new date system

  this.dayP = this.date.getDate();
  this.monthP = this.date.getMonth() + 1; // adding 1 cuz month start from 0
  this.yearP = this.date.getFullYear();

  this.h = this.d.getHours() ;
  this.m = this.d.getMinutes();
  this.sd = this.d.getSeconds();

  this.month = this.monthP <= 9 ? "0" + this.monthP : ""+this.monthP;
  this.day = this.dayP <= 9 ? "0"+this.dayP : ""+this.dayP;
  
  this.hs = this.h <= 9 ? "0"+ this.h : ""+this.h;
  this.ms = this.m <= 9 ? "0"+ this.m : ""+this.m;
  this.sds = this.sd <= 9 ? "0" + this.sd : ""+this.sd;

  let date =  this.yearP + "-" + this.month + "-" + this.day + " | " + this.hs + ":" + this.ms + ":" + this.sds;
  return date;
  }

}
