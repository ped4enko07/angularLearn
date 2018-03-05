import {Observable} from 'rxjs/Observable';
import {takeWhile} from 'rxjs/operators';

export function PipeDecorator(prototype, name) {
  const {ngOnDestroy} = prototype;
  prototype.isPipeOpened = true;

  prototype.ngOnDestroy = function (...args) {
    if (typeof ngOnDestroy === 'function') {
      ngOnDestroy.apply(prototype, args);
    }

    this.isPipeOpened = false;
  };

  prototype[name] = function <U>(observable: Observable<U>): Observable<U> {
    return observable.pipe(takeWhile(() => this.isPipeOpened));
  };
}
