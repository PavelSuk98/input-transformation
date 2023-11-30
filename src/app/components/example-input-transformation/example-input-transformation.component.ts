import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, booleanAttribute, numberAttribute } from '@angular/core';
import { Course } from '../../model/course.dto';

export interface ScheduleCourseEvent {
  title: string;
  from: Date;
  to: Date;
  showNotification: boolean;
}

export function toEvent(course: Course): ScheduleCourseEvent {
  return {
    title: course.name,
    from: course.startDate,
    to: course.endDate,
    showNotification: true,
  }
};

@Component({
  selector: 'app-example-input-transformation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>
    isResultBool: {{checkIfValueIsBool()}} <br>
    isResultNumber: {{checkIfValueIsNumber()}} <br>
    event: {{event.title}}
  </p>`,
  styleUrl: './example-input-transformation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleInputTransformationComponent { 

  //Build in transforms
  // booleanAttribute
  // numberAttribute

    @Input() set booleanParam(value: boolean) {
      console.log(typeof value == "boolean");
    }

    //@Input({ transform: booleanAttribute}) boolParam?: string;

    @Input() boolParam?: string;

    
    //@Input({ transform: numberAttribute}) numberParam?: string;
    
    @Input() numberParam?: string;

    @Input({ required: true, transform: toEvent, alias: 'course'}) event!: ScheduleCourseEvent;

    checkIfValueIsBool() {
      return typeof this.boolParam == "boolean";
    }

    checkIfValueIsNumber() {
      return typeof this.numberParam == "number";
    }
}
