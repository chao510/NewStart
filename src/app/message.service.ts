import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    if(confirm('Are you sure to delete messages ?')){
      this.messages = [];
    }
  }

  clearTop5Message(){
    if(confirm('Are you sure to delete Top 5 messages ?')){
      this.messages.splice(0,4);
    }
  }
}
