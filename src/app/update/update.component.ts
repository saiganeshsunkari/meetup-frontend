import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  show = false;
  showError = false;
  fName = '';
  sName = '';
  name = '';
  age = '';
  id = false;
  constructor(public insertService: RetriveService) { }

  ngOnInit() {
  }
  getUser() {

    this.insertService.getSingle(this.name).subscribe(res => {
      this.fName = res['firstname'];
      this.sName = res['lastname'];
      this.age = res['age'];
      this.id = true;
      console.log("stud", res);
    });
  }

  update() {
    var data = {
      "firstname": this.fName,
      "lastname": this.sName,
      "age": this.age
    }

    this.insertService.update(data,this.name).subscribe(res => {
      console.log("created response", res);
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 5000);
    }, (error) => {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    })
  }

}
