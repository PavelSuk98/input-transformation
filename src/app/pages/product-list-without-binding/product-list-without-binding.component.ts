import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ListObjectDTO } from '../../model/list.dto';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-without-binding',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `<section class="grid grid-cols-4 gap-5">
  @for (post of products$ | async; track post) {
    <a [routerLink]="['/detail-without-binding', post.id]">
      <section class="mb-1 p-2 border border-gray-400 shadow">
      {{ post.title}}
      </section>
  </a>
  }
</section>`,
  styleUrl: './product-list-without-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListWithoutBindingComponent { 
  
  protected readonly http = inject(HttpClient);

  protected products$ = this.http.get<ListObjectDTO[]>('https://jsonplaceholder.typicode.com/posts');
}
