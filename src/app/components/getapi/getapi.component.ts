import { Component, OnInit } from '@angular/core';
import {GetuserdataService} from "../../services/getuserdata.service";

@Component({
  selector: 'app-getapi',
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.scss']
})
export class GetapiComponent implements OnInit {
  items:any;
  constructor(private data:GetuserdataService) {
    data.user().subscribe((data1)=>{
      this.items=data1
    })
   }

  ngOnInit(): void {
  }

}
