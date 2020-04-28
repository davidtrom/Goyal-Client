import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignBlockService {
  showDesignBlock$: BehaviorSubject<boolean>;
  

  constructor() {
    this.showDesignBlock$ = new BehaviorSubject<boolean>(false);
   }

   getDesignBlockStatus(): Observable<boolean>{
     return this.showDesignBlock$.asObservable();
   }

   updateDesignBlockStatus(data: boolean){
     this.showDesignBlock$.next(data);
   }
}
