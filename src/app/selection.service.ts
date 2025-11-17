import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
private selectedSelectionSubject = new BehaviorSubject<string>('about');
selectedSection$ = this.selectedSelectionSubject.asObservable();

setSection(section: string){
  this.selectedSelectionSubject.next(section);
}

}
