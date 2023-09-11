import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(arr: any[], str: any): any {
    if(!str)
    return arr;

    return arr.filter((item, idx, self) => idx === self.findIndex(el => el[str] === item[str]));
  }

}
