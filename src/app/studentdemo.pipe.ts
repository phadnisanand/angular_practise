import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentdemo'
})
export class StudentdemoPipe implements PipeTransform {

  transform(value: String, ...args: any[]): unknown {
    if(args[0]) {
      return value.toLowerCase();
    }
    else {
      return value.toUpperCase();
    }
  }

}
