import { DAOUser } from "./DaoUser";
import { UserAddress } from "./useraddress";

export class Users{
    userid:number;
    firstName:string;
    lastName:string;
    mobileno:string;
    email:string;
    subExpireDate: any;
    subscriptionDate: any;
    subscriptionStatus: string;
    userAddress:UserAddress;
    user:DAOUser;
   

    constructor( userid:number,firstName:string,lastName:string, mobileno:string, email:string,subExpireDate:any,
     subscriptionDate:any, subscriptionStatus:string, userAddress:UserAddress,daoUser:DAOUser,)
{
    this.userid =userid
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobileno = mobileno;
    this.email = email;
    this.subExpireDate = subExpireDate;
    this.subscriptionDate = subscriptionDate;
    this.subscriptionStatus = subscriptionStatus;
    this.userAddress = userAddress;
    this.user=daoUser;
}
}
