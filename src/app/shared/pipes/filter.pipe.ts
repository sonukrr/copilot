import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();
    // console.log(items)
    // items.forEach((element:any) => {
    //   console.log("***",element.key)
    // });
    // return items
    return items.filter( (item:any) => {
      return item.key.toLowerCase().includes(searchText);
    });
  }

}
