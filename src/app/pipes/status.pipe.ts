import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let status = "NA";
    switch(value) {
      case 1:
        status = "Applied";
        break;
      case 2:
        status = "In Process";
        break;
      case 3:
          status = "Hired";
          break;
      case 4:
        status = "Not Hired";
        break;

    }
    return status;
  }

}
