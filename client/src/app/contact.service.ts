import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) { }

  //retrieving ContactService
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
      .pipe(map(res => res));
  }

  //add contact method
  addContact(newContact){
    var header
  }

}
