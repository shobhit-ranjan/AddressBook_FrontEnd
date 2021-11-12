import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service'

@Component({
  selector: 'app-addressbook-detali',
  templateUrl: './addressbook-detali.component.html',
  styleUrls: ['./addressbook-detali.component.css']
})
export class AddressbookDetaliComponent implements OnInit {

  public address: any[] = []


  constructor(private addressFromService: BackendApiService,) { }

  ngOnInit(): void {

    this.getAddressInfo();
  }

  getAddressInfo() {
    this.addressFromService.getAddress().subscribe(
      data => { this.address = data.data }
    );
  }

  onDelete(id: number) {
    this.addressFromService.deleteAddress(id).subscribe(data => {
      this.ngOnInit();
    });
  }


}