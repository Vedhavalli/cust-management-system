import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor() { }

  async getCustomers(): Promise<any[]> {
    const data = await fetch('http://localhost:3000/customers');
    return await data.json() ?? [];
  }

  async getCustomer(): Promise<any> {
    const data = await fetch(`http://localhost:3000/customers/${1}`);
    return await data.json() ?? {};
  }
}
