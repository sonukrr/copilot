import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class FirstWordPipe implements PipeTransform {

  transform(value: string): string {

    // console.log("*******************8 ", value)
    if (value.length <= 26) {
      return value;
    } else {
      return value.slice(0, 26) + '...';
    }
  }

}
