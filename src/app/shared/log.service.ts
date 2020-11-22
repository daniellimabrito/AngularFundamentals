import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  consoleLog(msg: any) {
    console.log(msg);
  }
}
