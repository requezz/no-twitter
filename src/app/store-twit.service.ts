import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreTwitService {

  items = [
    {
      id: 1,
      text: 'hello everyone. How are you?',
      like: true,
      author: 'admin',
    },
    {
      id: 2,
      text: 'Как живется на карантине? Мне плохо',
      like: false,
      author: 'adam'
    },
    {
      id: 3,
      text: 'Эту домашку нужно выполнить во что бы то не стало!',
      like: false,
      author: 'admin'
    },
    {
      id: 4,
      text: 'Я так говорю о всех домашках',
      like: false,
      author: 'no-avatar'
    },
    {
      id: 5,
      text: 'Но эта особенная...',
      like: false,
      author: 'adam'
    }
 ];


  onlyLike = false;

  active = false;

  toggleAll() {
    this.onlyLike = false;
    this.active = !this.active;
  }


  getTwits() {
    const twits = [];

    this.items.forEach(item => {
      twits.push(item.id);
    });
    return twits;
  }

  getItems() {
    return this.items;
  }




removeCompletedItems() {
    this.items = this.items.filter(item => item.like);
  }

toggleLike(id) {
    this.items = this.items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          like: !item.like
        };
      }
      return item;
    });
  }

constructor() { }
}
