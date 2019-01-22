// Found at https://stackoverflow.com/questions/41131754/angular2-sorting-array-for-displaying-in-ngfor-in-html
// Credit goes to author

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {

    if (!array || array === undefined || array.length === 0) { return null; }

    array.sort((a: any, b: any) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
