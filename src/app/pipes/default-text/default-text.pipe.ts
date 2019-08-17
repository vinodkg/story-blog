import { Pipe, PipeTransform } from '@angular/core';
import { ConstantsService } from '../../services/constants/constants.service';

@Pipe({
  name: 'defaultText'
})
export class DefaultTextPipe implements PipeTransform {

  constructor(private CONSTANTS: ConstantsService){

  }

  DEFAULT_LABELS = this.CONSTANTS.STORY_DEFAULT_LABELS;

  transform(value: any, args?: any): any {
    let defaultText = value;
    if(!value){
      switch(args){
          case "title":
            defaultText = this.DEFAULT_LABELS.TITLE;
            break;
          case "img":
            defaultText = this.DEFAULT_LABELS.IMAGE;
            break;
          case "content":
            defaultText = this.DEFAULT_LABELS.CONTENT;
            break;
      }
    }
    return defaultText;
  }
}
