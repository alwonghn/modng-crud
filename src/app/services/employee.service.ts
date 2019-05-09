import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  // getEmployees():Observable<Employee[]>{
  //   return this.http.get<Employee[]>('http://localhost:8080/demo/employees');
  // }

  // getAllEmployees():Observable<any>{
  //   console.log("into employee.service getAllEmployees");
  //   return this.http.get('http://localhost:8080/demo/employees');
  // }

  getEmployees():Observable<Employee[]>{
    console.log("into employee.service getEmployees");
    return this.http.get<Employee[]>('http://localhost:8080/demo/employees');
  }

  // (response:Response)=>{
  //   this.employeeList=response.data;
  // },

}
