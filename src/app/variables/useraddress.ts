
export class UserAddress{
    address1: string;
      address2: string;
   
      city:string;
      pincode: number;
      state:string ;

      constructor(address1:string, address2:string, city:string, pincode:number, state:string){
          this.address1 = address1;
          this.address2 = address2;
          this.city = city;
          this.pincode = pincode;
          this.state = state;
      }
}