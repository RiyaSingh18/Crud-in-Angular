import { Component, OnInit } from '@angular/core';
import { DataListService } from './data-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
public products=[];
  constructor(private data:DataListService){}
  ngOnInit():void{
this.data.getproduct().subscribe(data=>this.products=data);
  }
  public RegisterProduct(data){
    this.data.addproducts(data).subscribe(error=>console.log("something went wrong unable to insert"));
    alert("Record inserted");
    location.reload();
  }
  
}
