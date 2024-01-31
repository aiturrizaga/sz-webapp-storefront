import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../core/services/category.service';
import { Category } from '../../../core/interfaces';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('opacity', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms ease-in-out', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms ease-in-out', style({opacity: 0}))
      ])
    ]),
    trigger('translateX', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in-out', style({transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate('500ms ease-in-out', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  isSlideOver: boolean = false;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  toggleSlide(): void {
    this.isSlideOver = !this.isSlideOver;
  }

  getCategories() {
    this.categoryService.getAll().subscribe(res => this.categories = res);
  }

}
