import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nameBar = '';
  emailBar = '';
  messageBar = '';

  submitMess() {
    console.log(this.nameBar);
    console.log(this.emailBar);
    console.log(this.messageBar);
  }
}
