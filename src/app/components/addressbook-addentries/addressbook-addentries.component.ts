import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addressWithOutId } from 'src/app/Model/model';
import { BackendApiService } from 'src/app/services/backend-api.service';




@Component({
  selector: 'app-addressbook-addentries',
  templateUrl: './addressbook-addentries.component.html',
  styleUrls: ['./addressbook-addentries.component.css']
})


export class AddressbookAddentriesComponent implements OnInit {
  contact: addressWithOutId = {
    firstname: '',
    phone: 0,
    zipcode: 0,
    address: '',
    city: '',
    state: ''
  }

  constructor(private service: BackendApiService, private routerlink: Router) {

  }

  ngOnInit(): void {
  }


  onSumbit(form: any) {
    console.log(form)
    this.contact.firstname = form.value.firstname;
    this.contact.phone = form.value.phone;
    this.contact.zipcode = form.value.zipcode;
    this.contact.address = form.value.address;
    this.contact.city = form.value.city;
    this.contact.state = form.value.state;

    this.service.postAddress(this.contact).subscribe(
      n => {
        console.log(n);
        this.routerlink.navigate(["/"])
      }
    )
  }


  state = [
    "Karnataka", "Maharashtra", "Uttar Pradesh", "Uttarakhand", "Himachal Pradesh"
  ]

  city = [
    "Bengaluru", "Mumbai", "Lucknow", "Rachi", "Dehradun"
  ]

  pinCode = [
    "560004", "230532", "226001", "834001", "248001",
  ]

}




