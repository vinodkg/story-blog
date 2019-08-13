import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobstatus'
})
export class JobstatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let status = "NA";
    switch(value) {
      case 1:
        status = "Active";
        break;
      case 2:
        status = "Closing Soon";
        break;
      case 3:
          status = "Closed";
          break;
    }
    return status;
  }

}
