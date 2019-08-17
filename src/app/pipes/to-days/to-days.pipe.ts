import { Pipe, PipeTransform } from '@angular/core';
import { UtilityService } from 'src/app/services/utilities/utility.service';

@Pipe({
  name: 'toDays'
})
export class ToDaysPipe implements PipeTransform {

  constructor(private UTILS: UtilityService){}

  transform(value: any, args?: any): any {
    const keys = ["Recent", "1 day ago", "2 weeks ago", "1 month ago"];
    const randomNumber = this.UTILS.GET_RANDOM_NUMBER(0, 3);
    return keys[randomNumber];
  }

}
