import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-input-option',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>
    required: {{requiredValue}}
    @if(id) {
      optional: {{id}}
    }
  </p>`,
  styleUrl: './example-input-option.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInputOptionComponent {

  @Input({ required: true}) requiredValue!: string; // This value tells compiler that it needs to be filled;

  @Input({ alias: 'postId' }) id?: string;

 }
