import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(items?: any[], filter?: any): any {
    if(!items || !filter){
      return items;
    }

    if(typeof filter === 'function')
      return items = filter();

      let key = Object.keys(filter)[0];
      if(!filter[key])
        return items;

      if(typeof items[0][key] === 'number')
        return items.filter(item => item[key] == filter[key]);

      return items.filter(item => item[key].indexOf(filter[key]) !== -1);
  }

}
