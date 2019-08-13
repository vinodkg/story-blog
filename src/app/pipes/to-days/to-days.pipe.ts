import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toDays'
})
export class ToDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const keys = ["Recent", "1 day ago", "2 weeks ago", "1 month ago"];
    const minimum = 0;
    const maximum = 3;
    const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return keys[randomNumber];
  }

}
