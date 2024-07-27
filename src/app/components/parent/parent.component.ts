import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private http:HttpRequestService) { }
   data:any=[]
   questions:any=[]
  ngOnInit(): void {
    console.log('inpu',this.data);
    this.getQuestions();
  }
  getQuestions(){
    this.http.request('get','questions',null).subscribe((res:any)=>{
      // this.data=res;
      this.questions=res;
      this.data=res
    })
  }
}
