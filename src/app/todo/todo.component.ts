import { Component, OnInit } from '@angular/core';
import {StoreTwitService} from '../store-twit.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private service: StoreTwitService
  ) { }

  getItems() {
    return this.service.getItems();
  }

  toggleLike(id) {
    return this.service.toggleLike(id);
  }

  removeCompletedItems() {
    this.service.removeCompletedItems();
  }

  getTwits() {
    this.service.getTwits();
  }

  allTwits() {
    this.service.allTwits();
  }


  ngOnInit(): void {
  }

}
