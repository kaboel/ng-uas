import {Component, OnInit} from '@angular/core';
import {Contact} from '../../shared/models/contact';
import {ContactService} from '../../core/services/contact.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

    contacts: Contact[];
    faTrash = faTrash;

    constructor(public contactService: ContactService) {
    }

    ngOnInit() {
        this.contactService.getContacts().subscribe(contacts => {
            this.contacts = contacts;
        });
    }

    deleteData(event, contact: Contact) {
        if (confirm('Are you sure you want to delete this contact?') === true) {
            this.contactService.deleteContact(contact);
        }
    }

}
