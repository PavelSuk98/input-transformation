import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ProductListWithBindingComponent } from './pages/product-list-with-binding/product-list-with-binding.component';
import { ProductDetailWithInputBindingComponent } from './pages/product-detail-with-input-binding/product-detail-with-input-binding.component';
import { detailResolver } from './resolver/detail.resolver';
import { ProductListWithoutBindingComponent } from './pages/product-list-without-binding/product-list-without-binding.component';
import { ProductDetailWithoutInputBindingComponent } from './pages/product-detail-without-input-binding/product-detail-without-input-binding.component';
import { InputTransformationsComponent } from './pages/input-transformations/input-transformations.component';

export const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', component: ProductListWithBindingComponent, title: 'Product list with binding'},
            { path: 'detail-binding/:id', component: ProductDetailWithInputBindingComponent, title: 'Product detail with binding', resolve: {
                detail: detailResolver
            }},
            { path: 'list-without-binding', component: ProductListWithoutBindingComponent, title: 'Product list without binding'},
            { path: 'detail-without-binding/:id', component: ProductDetailWithoutInputBindingComponent, title: 'Product detail without binding', resolve: {
                detail: detailResolver
            }},
            { path: 'input-transformations', component: InputTransformationsComponent, title: 'Input transformations' }

        ]
    }
];
