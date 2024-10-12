import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket = io('http://localhost:8000');

  getSocketData(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('data', (data) => observer.next(data));
    });
  }
}
