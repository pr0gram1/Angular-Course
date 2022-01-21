import { PipeTransform, Pipe } from '@angular/core';
// decorator for speciging the name
@Pipe({
  name: 'shorten',
  // forcing update on each change on web
  pure: false
})

export class ShortenPipe implements PipeTransform{
  // needs to recive a value that transforms
  // limit - passing a parameter
  transform(value: any, limit: number) {
    if (value.length > 10) {

      return value.substr(0, limit) + '...s';
    }
    return value;
  }

}
