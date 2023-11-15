import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  checkoutForm = this.formBuilder.group({
    searchTerm: '',
  });

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit(): void {
    const searchQuery = this.checkoutForm.value.searchTerm;
    
    this.router.navigate([`/search`], { queryParams: { title: searchQuery } });
  }
}
