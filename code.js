"use strict";
var Size;
(function (Size) {
    Size[Size["Small"] = 14] = "Small";
    Size[Size["Medium"] = 15] = "Medium";
    Size[Size["Large"] = 16] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
