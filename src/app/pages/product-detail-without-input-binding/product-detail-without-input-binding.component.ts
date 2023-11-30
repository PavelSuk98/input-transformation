import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DetailObjectDTO } from '../../model/detail.dto';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-detail-without-input-binding',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  template: `<section>
  <p>ParamId: {{paramId}}</p>
  <a [routerLink]="['/detail-without-binding', 50]">Detail to anotherPost</a>
  </section>`,
  styleUrl: './product-detail-without-input-binding.component.css',
})
export class ProductDetailWithoutInputBindingComponent implements OnInit {

  protected readonly route = inject(ActivatedRoute);

  protected readonly cdr = inject(ChangeDetectorRef);

  protected paramId: string | undefined;

  protected detail: DetailObjectDTO | undefined;

  protected detail$ = this.route.data.pipe(map((response) => response['detail']));

  protected paramId$ = this.route.params.pipe(map((response) => response['id']));


  ngOnInit(): void {

    const detailDTO = this.route.snapshot.data['detail'];

    const paramId = this.route.snapshot.params['id'];

    this.route.data.subscribe({
      next: (response) => {
        const detailDTO = response['detail'];
        console.log(detailDTO);
        if (detailDTO) {
          this.detail = detailDTO;
        }
      }
    })

    this.route.params.subscribe({
      next: (response) => {
        const paramId = response['id'];
        console.log(paramId);
        if (paramId) {
          this.paramId = undefined;
          this.paramId = paramId;
        }
        
        this.cdr.markForCheck();
        
      }
    })

  }
}
