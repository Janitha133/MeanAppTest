import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  contact: Contact;
  first_name: String;
  last_name: String;
  phone: String;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((contcts: Contact[]) => this.contacts = contcts);
  }

  

}
