class Person {
    firstName: string;
    lastName: string;


    constructor(firstName: string, lastName: string) {

    }
}

class Patient extends Person {
    patientId: string;

    constructor(firstName: string, lastName: string, patientId: string) {
        super(firstName, lastName)
        this.patientId = patientId;
    }

}
class Doctor extends Person {
    doctorId: string;
    specialization: string;

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName)
    }
    showDetails() {
        console.log(this);
        }
}

