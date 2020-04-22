/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */


var person = {
    name: "Alan",
    age: 44,
    hasDriverLicense: true,
    dob:"12/12/1222",
    address:{
        street: "123Main",
        zipCode: "02030",
        country: "USA"
    }
};

log(JSON.stringify(person));

log(JSON.stringify(person.name));
log(JSON.stringify(person.age));
log(JSON.stringify(person.hasDriverLicense));

log(Object.values(person));