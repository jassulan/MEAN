import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface ContactsList {
  name: string;
  order: number;
  position: string;
  email: string;
}

const CONTACTS_DATA: ContactsList[] = [
  {order: 1, name: 'Cicek Tekin', position: 'Project Manager', email: 'cicekt@bu.edu'},
  {order: 2, name: 'Chen Long', position: 'Business Analytics', email: 'longchen@bu.edu'},
  {order: 3, name: 'Ben Harris-Eze', position: 'Business Analytics', email: 'bhe@bu.edu'},
  {order: 4, name: 'Zhassulan Kaishentayev', position: 'Developer', email: 'jassulan@bu.edu'},
  {order: 5, name: 'Michael Ranasinghe', position: 'Developer', email: 'ranasm@bu.edu'},
  {order: 6, name: 'Kehua Wang', position: 'Developer', email: 'endywang@bu.edu'},

];

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent{
  displayedColumns: string[] = ['order', 'name', 'position', 'email'];
  dataSource = new MatTableDataSource(CONTACTS_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
