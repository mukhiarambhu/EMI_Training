import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    console.log(value)
    return value==5 ? "Excellent":value==4 ? "Very Good" :value==3?"Good":value==2 ? "Satisfactory":'NOt upto Mark'
  }

}
