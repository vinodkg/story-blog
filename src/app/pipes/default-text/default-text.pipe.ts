import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultText'
})
export class DefaultTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let defaultText = value;
    if(!value){
      switch(args){
          case "title":
            defaultText = "Your title here!";
            break;
          case "img":
              defaultText = "assets/images/story-image.jpg";
              break;
          case "content":
              defaultText = "Your content here!";
              break;

      }
    }
    
    return defaultText;
  }

}
