import { Pipe, PipeTransform } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants/constants.service';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  constructor(private CONSTANTS: ConstantsService) {

  }

  APPLICATION_STATUSES = this.CONSTANTS.APPLICATION_STATUS_LABELS;

  transform(value: any, args?: any): any {
    let status = this.APPLICATION_STATUSES.OTHER;
    switch (value) {
      case 1:
        status = this.APPLICATION_STATUSES.APPLIED;
        break;
      case 2:
        status = this.APPLICATION_STATUSES.IN_PROCESS;
        break;
      case 3:
        status = this.APPLICATION_STATUSES.HIRED;
        break;
      case 4:
        status = this.APPLICATION_STATUSES.NOT_HIRED;
        break;

    }
    return status;
  }

}
