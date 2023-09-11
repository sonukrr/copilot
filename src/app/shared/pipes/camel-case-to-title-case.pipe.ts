import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCaseToTitleCase'
})
export class CamelCaseToTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    // Remove numbers from the string
    const stringWithoutNumbers = value.replace(/[0-9]/g, '');

    // Remove underscore

    const stringWithoutNumbers2 = stringWithoutNumbers.replace('_', '');


    // Convert camelCase to title case
    const titleCase = stringWithoutNumbers2.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Capitalize the first letter of each word
    return titleCase.replace(/\b\w/g, (match) => match.toUpperCase());
  }

}
