export class Contact {

    firstName: string;
    lastName: string;
    email: string;
    phoneNum: string;
    birthDate: Date;
    reasonForContact: string;
    preferredApptTime: string;
    message: string;

    constructor(firstName: string, lastName: string, email: string, phoneNum: string, birthDate: Date, reasonForContact: string, preferredApptTime: string, message: string){
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
