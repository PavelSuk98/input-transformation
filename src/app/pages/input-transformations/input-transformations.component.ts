import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExampleInputOptionComponent } from '../../components/example-input-option/example-input-option.component';
import { ExampleInputTransformationComponent } from '../../components/example-input-transformation/example-input-transformation.component';
import { Course } from '../../model/course.dto';


@Component({
  selector: 'app-input-transformations',
  standalone: true,
  imports: [
    CommonModule,
    ExampleInputOptionComponent,
    ExampleInputTransformationComponent,
  ],
  template: `<section>¨
      <h1 class="text-xl font-bold">Example input options</h1>
      <app-example-input-option requiredValue="123" postId="1"></app-example-input-option>
      <h1 class="text-xl font-bold">Example input without transformation</h1>
      <app-example-input-transformation boolParam="true" [course]="course" numberParam="0"></app-example-input-transformation>
  </section>`,
  styleUrl: './input-transformations.component.css',
})
export class InputTransformationsComponent { 

  protected data = {
    string: 'Test',
    number: 123,
    isActive: false
  }

  protected course: Course = {
    name: 'Super course',
    startDate: new Date(),
    endDate: new Date()
  }

}
