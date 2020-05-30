export class Contact {

    id:number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNum: string;
    birthDate: Date;
    reasonForContact: string;
    preferredApptTime: string;
    message: string;

    constructor(id: number, firstName: string, lastName: string, email: string, phoneNum: string, birthDate: Date, reasonForContact: string, preferredApptTime: string, message: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNum = phoneNum;
        this.birthDate = birthDate;
        this.reasonForContact = reasonForContact;
        this.preferredApptTime = preferredApptTime;
        this.message = message;
    }
}
