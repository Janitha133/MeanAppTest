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

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact)
      .subscribe((contact: Contact) => {
        this.contacts.push(contact);
        this.contactService.getContacts()
          .subscribe((contcts: Contact[]) => this.contacts = contcts);
      });
  }

  deleteContact(id: any){
    var contacts = this.contacts;
    this.contactService.deleteContact(id)
      .subscribe(data => {
        if(data == 1){
          for(var i = 0; i < contacts.length; i++){
            if(contacts[i]._id == id){
              contacts.splice(i,1)
            }
          }
        }
        this.contactService.getContacts()
        .subscribe((contcts: Contact[]) => this.contacts = contcts);   
      });
  }

  ngOnInit() {
    this.contactService.getContacts()
      .subscribe((contcts: Contact[]) => this.contacts = contcts);
  }
}
