import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {
    private state$ : BehaviorSubject<T>;

    constructor(initialState: T) {
        this.state$ = new BehaviorSubject<T>(initialState);
    }

   protected get state() {
        return this.state$.getValue();
    }

    protected setState(newState: T) {
        this.state$.next({
            ...this.state$,
            ...newState,
        });
    }
}
