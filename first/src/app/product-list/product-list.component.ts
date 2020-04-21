import { Component, OnInit } from '@angular/core';
import { DataListService } from '../data-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public products=[];
  constructor(private data:DataListService) { }

  ngOnInit(): void {
this.data.getproduct().subscribe(data=>this.products=data)
  }

}
