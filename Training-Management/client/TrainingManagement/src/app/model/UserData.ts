import { Department } from "./Department";
import { Designation } from "./Designation";
import { Role } from "./Role";



export class User{
   
    userId:string;
    nsid:string;
    password:string;
    fname:string;
    lname:string;
    email:string;
    phone:number;
    department:Department;
    designation:Designation;
    role:Role;
    active:Boolean;
    profile:string;
    otp:number;
    confirmotp:number;
}