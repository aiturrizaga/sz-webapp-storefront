import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Category } from '../../core/interfaces';
import { CategoryService } from '../../core/services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './category.page.html',
  styles: []
})
export class CategoryPage implements OnInit {

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }
}
