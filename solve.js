let test = ["R", "H", "M", "S", "R,H,H", "S,M", "S,H,R,M", "R,H,S"];
// let a=prompt("Please enter your input");
let x;
var required = '';
var total = 0;
let animals = {
    R: 400,
    H: 400,
    M: 800,
    S: 1200

};
let boxes = {
    B1: 400,
    B2: 800,
    B3: 1600

};

test.forEach((val) => {
    var required = '';
    var total = 0;
    x = Array.from(val);

    x.forEach((v) => {
        if (v != ',')
            total += animals[v];

    });


    while (total != 0) {
        if (total <= boxes.B1) {
            required = required + 'B1';
            total = total - boxes.B1;
            if (total < 0) {
                total = 0;
            }

        }
        else if (total > boxes.B1 && total <= boxes.B2) {
            required = required + 'B2';
            total = total - boxes.B2;
            if (total < 0) {
                total = 0;
            }
            else if (total > 0)
                required = required + ',';
        }
        else if (total > boxes.B2) {
            required = required + 'B3';
            total = total - boxes.B3;
            if (total < 0) {
                total = 0;
            }
            else
                required = required + ',';
        }

    };

    var t = document.getElementById('tab');
    var row = `<tr>
        <td>${val}</td>
        <td>${required}</td>
        
        </tr>`
    t.innerHTML += row;
    console.log(`Input\t  Required Boxes\n ${val}\t  ${required}`);


});

