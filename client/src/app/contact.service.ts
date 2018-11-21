import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { from } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //retrieving ContactService
  getContacts()
  {
    return this.http.get('http://localhost:3000/api/contacts')
  
  }

}
