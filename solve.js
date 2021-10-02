let test = ["R", "H", "M", "S", "R,H,H", "S,M", "S,H,R,M", "R,H,S"]; /* Input Array with different Inputs  values for Automated test*/

let x;
var required = '';
var total = 0;
var m;
let animals = { //Object with animal name as key and occupied space converted to area  as value of key
    R: 400,
    H: 400,
    M: 800,
    S: 1200

};
let boxes = { //Object with boxes name as key and occupied space converted to area  as value of key
    B1: 400,
    B2: 800,
    B3: 1600

};

test.forEach((val) => { //for loop to iterate each value of input Array for Automated test
    required = '';
    total = 0;
    m = 0;
    x = Array.from(val); // convert String to array because we pass input as String with coma seprated animals names


    x.forEach((v) => { // this for loop will calculate the total area which is required by the animals given in the input
        if (v != ',')
            total += animals[v];

    });



    while (total != 0 && m < x.length) { //while loop will iterate til the total is not equal to zero


        if (total <= boxes.B1 && (x[m] == 'R' || x[m] == 'H')) /*if totalsize less then or equal to B1 select B1 and subtract Area of B1 from Total*/
        {

            required = required + 'B1';
            total = total - 400;
            if (total < 0) {
                total = 0;
            }
            else if (total > 0)
                required = required + ',';

            m + 2;


        }
        else if (total > boxes.B1 && total <= boxes.B2) { /*if totalsize less then or equal to B2 and total is greater than B1 select B2 and subtract Area of B2 from Total*/
            required = required + 'B2';
            total = total - 800;
            if (total < 0) {
                total = 0;
            }
            else if (total > 0)
                required = required + ',';
            m = m + 2;
        }

        else if (total > boxes.B2) {/*if totalsize is greater than B2 select B3 and subtract Area of B3 from Total*/
            let c = m;
            let remaining = 1600;
            let i = x.indexOf('S');
            if (i > 0 && m == 0) {
                let temp;
                temp = x[m];
                x[m] = x[i];
                x[i] = temp;

            }

            while (remaining != 0 && c < x.length) {
                /* THIS while loop will iterate the provided input String and check if there is any animal which
                can be put in the remaining space availabel in box B3  */


                if (x[c] == 'S' && remaining >= 1600) {
                    total = total - 1200;
                    remaining = 1600 - 1200

                    m = m + 2;
                }
                else if (remaining >= 400 && (x[c] == 'R' || x[c] == 'H')) {
                    total = total - 400;
                    remaining = remaining - 400;
                    m = m + 2;
                }
                else if (x[c] == 'M' && remaining >= 800) {
                    total = total - 800;
                    remaining = remaining - 800;
                    m = m + 2;
                }
                c = c + 2;


            }

            required = required + 'B3';
            if (total < 0) {
                total = 0;
            }
            else if (total > 0)
                required = required + ',';

        }

    }
    var t = document.getElementById('tab');
    var row = `<tr>
        <td>${val}</td>
        <td>${required}</td>
        
        </tr>`
    t.innerHTML += row; //this will add a new row with input and reqired boxes for the given input 

    console.log(`Input\t         Required Boxes\n ${val}\t\t          ${required}`);


});