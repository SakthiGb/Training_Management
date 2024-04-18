import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainconfigService {

  constructor() { }

  compMatch: any
  array: any = []

  getMsg(alpha: any) { this.compMatch = alpha }

  setMsg() { return this.compMatch; }

  getMaster(alpha: any, beta: any) {
    this.array.push(alpha)
    this.array.push(beta)
  }

  setMaster() { return this.array }
}
