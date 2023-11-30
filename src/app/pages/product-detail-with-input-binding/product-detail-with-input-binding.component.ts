import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DetailObjectDTO } from '../../model/detail.dto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-detail-with-input-binding',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  template: `<p>id: {{id}}</p>
  <a [routerLink]="['/detail-binding', 50]">Detail to anotherPost</a>`,
  styleUrl: './product-detail-with-input-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailWithInputBindingComponent { 

  @Input() detail?: DetailObjectDTO; //resolved Detail

  @Input() id?: string // param route

  // @Input({alias: 'detail'}) set resolvedDetail(fetchedData: DetailObjectDTO | undefined) {
  //   this.detail = fetchedData;
  //   console.log(fetchedData);
  // }

  // @Input({ alias: 'id' }) set paramId(id: string) {
  //   this.id = id;
  //   console.log(id);
  // };
}
