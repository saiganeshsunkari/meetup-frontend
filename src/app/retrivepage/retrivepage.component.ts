import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-retrivepage',
  templateUrl: './retrivepage.component.html',
  styleUrls: ['./retrivepage.component.css']
})
export class RetrivepageComponent implements OnInit {
  sEmail1 = "";
  sEmail = "";
  sName = "";
  sPhoneNumber = "";
  sAddress = "";
  sDepartment = "Select Department";
  apiError = false;
  apiSuccess = false;
  showError = false;
  searchBar = false;
  showDiv = false;
  id;
  students;
  resp: any;
  constructor(public insertService: RetriveService) { }

  ngOnInit() {
    this.insertService.getall().subscribe(res=>{
      this.students = res;
      console.log("stud",this.students);
    })
  }
  getOne(){
    this.students = [];
    if(!this.id){
      this.insertService.getall().subscribe(res=>{
        this.students = res;
        console.log("stud",this.students);
      })
    }else{
    this.insertService.getSingle(this.id).subscribe(res=>{
      this.students.push(res) ;
      console.log("stud",this.students);
    })
  }
  }

  //insert function 
  

}
