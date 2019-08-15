import { Pipe, PipeTransform, Sanitizer } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private sanitizer?: DomSanitizer){

  }
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustUrl( value );
  }
}
