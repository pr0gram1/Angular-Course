// this will filter all stable and unstable/ online or offline objects by searching on textfield

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0) {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] == filterString{
        resultArray.push(item);
      }


  }
    return resultArray;
}
}
