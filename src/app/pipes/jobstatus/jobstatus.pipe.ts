import { Pipe, PipeTransform } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants/constants.service';
import { constants } from 'zlib';

@Pipe({
  name: 'jobstatus'
})
export class JobstatusPipe implements PipeTransform {
  constructor(private CONSTANTS : ConstantsService){
  }

  JOB_STATUSES = this.CONSTANTS.JOB_STATUS_LABELS;
  
  transform(value: any, args?: any): any {
    let status = this.JOB_STATUSES.OTHER;
    switch(value) {
      case 1:
        status = this.JOB_STATUSES.ACTIVE;
        break;
      case 2:
        status = this.JOB_STATUSES.CLOSING_SOON;
        break;
      case 3:
        status = this.JOB_STATUSES.CLOSED;
        break;
    }
    return status;
  }
}
