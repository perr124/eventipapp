import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Reverse pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'reverse'
})
@Injectable()
export class Reverse {
  transform(value) {
    if (!value) return;
    return value.slice().reverse();
  }
}

  // if (!input || !input.length) { return; }
