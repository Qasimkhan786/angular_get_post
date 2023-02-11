import { Component, OnInit } from '@angular/core';
import { GetuserdataService} from "../../services/getuserdata.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private data:GetuserdataService) {
    
   }
   getdatafromuser(info:any){
    this.data.senddata(info).subscribe((res)=>{
      console.log(res)

    })

   }

  ngOnInit(): void {
  }

}
