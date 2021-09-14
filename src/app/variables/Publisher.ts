
export class Publisher {
    publisherId: number;
    publisherName: string;
    contactno: string;
    email: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    pincode: number;
    constructor( publisherId: number,
        publisherName: string,
        contactno: string,
        email: string,
        address1: string,
        address2: string,
        city: string,
        state: string,
        pincode: number,){
            this.publisherId = publisherId;
            this.publisherName=publisherName;
            this.contactno=contactno;
            this.email=email;
            this.address1=address1;
            this.address2=address2;
            this.city=city;
            this.state=state;
            this.pincode=pincode;

    }
}