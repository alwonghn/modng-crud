import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee';
// mocking only
// import {data} from './employees';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.css']
})

export class EmployeesTableComponent implements OnInit {

  //employeeList:Employee[];
  employeeList:Array<Employee>;
  columns:string[];

  constructor(
    private employeeService:EmployeeService
  ) { }

  ngOnInit() {
    //mocking only
    // this.employeeList=data;
    // this.columns=["id","username","firstname","lastname"];
    this.columns=["username","firstname","lastname"];
    // this.employeeService.getEmployees().subscribe(
    //   (res:any)=>{
    //     this.employeeList=res.data;
    //   },
    //   err=>{console.error(err)}
    // );

    // this.employeeService.getEmployees().subscribe(
      // (res:any)=>{
      //   this.employeeList=res.data;
      // },
      // err=>{console.error(err)}
    // );

    // this.employeeService.getAllEmployees().subscribe(
    this.employeeService.getEmployees().subscribe(

            //(data)=>{this.employeeList=data;}

            // .map((response:Response)=>{
            //   console.log(response.json());
            //   return response.json();
            // }).subscribe()

            // (response:Response)=>{
            data=>{
              // console.log(response.json());

              if(!data){
                console.log("data is null or undefined");
              }else{
                console.log("data is not null");
                console.log(data);
                console.log("type of data:"+(typeof data));
                this.employeeList=data;
                console.log(this.employeeList);
                console.log("type of this.employeeList:"+(typeof this.employeeList));
              }
            }
    );


  }

}
