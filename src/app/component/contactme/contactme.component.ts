import { Component, OnInit } from '@angular/core';
import { ContactmeService } from 'src/app/service/contactme.service';


@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  contact: { id, name, description, email } = { id: null, name: "", description: "", email: "" };

  constructor(public contactmeService: ContactmeService) { }

  ngOnInit(): void {
  }

  createContact() {
    console.log(this.contact);
  }
}
