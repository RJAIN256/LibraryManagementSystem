import { DAOUser } from "./DaoUser";

export class Admin{
    id:number;
    user:DAOUser;
    constructor(id:number,
        user:DAOUser){
            this.id=id;
            this.user=user;
        }
}