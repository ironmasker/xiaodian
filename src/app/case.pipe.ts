import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cases'
})
export class CasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) return null;
    let v = value.trim().toLowerCase().split(' ');
    let r = '';
    let preposition = [
      "the",
      "of",
      'to'
    ];
    for (let i = 0; i < v.length; i++) {
      if (i != 0 && preposition.includes(v[i])) {
        r = r.concat(v[i]).concat(' ');
      } else {
        r = r.concat(v[i].charAt(0).toUpperCase() + v[i].slice(1)).concat(' ');
      }
      console.log(r);
    }
    return r;
  }

}
