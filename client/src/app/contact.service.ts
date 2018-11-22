import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    var headers = new HttpHeaders();
    headers.append('Content-type','application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact, {headers:headers})
      .pipe(map(res => res));
  }

  //delete method
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact'+id)
      .pipe(map(res => res));
  }

}
