import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {
  transform(value: number): unknown {
    return value == 5
      ? 'Excellent'
      : value == 4
      ? 'Very Good'
      : value == 3
      ? 'Good'
      : value == 2
      ? 'Satisfactory'
      : 'Not upto Mark';
  }
}
