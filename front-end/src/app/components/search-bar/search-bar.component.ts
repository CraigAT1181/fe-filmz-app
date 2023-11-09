import { Component, Input} from '@angular/core';
import {FormBuilder} from '@angular/forms'


@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],

})

export class SearchBarComponent {

  @Input() size!: number | string;
  searchTerm!: string;
  searchForm = this.formBuilder.group({
    searchTerm: ''
  })

  constructor(
    private formBuilder: FormBuilder) {}
  
    onSubmit(event: any) {
      console.log(event.target.searchTerm.value)
      return event.target.searchTerm.value}
}
