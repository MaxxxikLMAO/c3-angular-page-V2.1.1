import {Component} from '@angular/core';
import {Output, EventEmitter} from "@angular/core";

interface ISearchOption {
  title: string;
  path: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  search = ''; // content inputu (search políčka)
  resultStorage: ISearchOption[] = [
    {title: ' home ', path: ''},
    {title: ' o nás ', path: 'about'},
    {title: ' kontaktní formulář ', path: 'contact'},
    {title: ' zaregistrujte se ', path: 'user.create'},
  ];



  getFilteredOptions(): ISearchOption[] {
    const result: ISearchOption[] = []; // pole na uložení možností odpovídající searchi
    for (const option of this.resultStorage) {
      if (option.title.includes(this.search)) { // pokud title obsahuje hledaný výraz
        result.push(option); // tak se uloží do resultu.
      }
    }
    return result;
  }
  @Output()
  postButtonClick = new EventEmitter<void>();

  onClick() {
      this.postButtonClick.emit();
  }
}
