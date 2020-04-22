/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Arrays')
/* coding examples */

var names = ["Alan", "Albert", "Alina"];

log(names);

for (var n of names){
    log(n + " is Mah Name");
}

names.forEach(function(n, index){
    log(index + " - "+ n);
})
