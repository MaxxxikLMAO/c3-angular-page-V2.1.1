import {Component} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";

interface ISearchOption {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  booleanxd = true;

}

/**
 *
 * export class Output {
  Output()sideBarOne: EventEmitter<string> = new EventEmitter<string>();
  onClick(): void {
    this.sideBarOne.emit('Trial skrskr');
  }
}
 */

