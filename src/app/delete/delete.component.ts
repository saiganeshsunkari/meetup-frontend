import { Component, OnInit } from '@angular/core';
import { RetriveService } from '../retrive.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  show = false;
  showError = false;
  name;
  constructor(public insertService: RetriveService) { }

  ngOnInit() {
  }
  deleteRec(){
    console.log("inside")
    this.insertService.delete1(this.name).subscribe(res=>{
      console.log("stud",res);
      this.show = true;
      // setTimeout(() => {
      //   this.show = false;  
      // }, 5000);
      
    },(error)=>{
      this.showError = true;
      // setTimeout(() => {
      //   this.showError = false;  
      // }, 5000);
    });
  }

}
