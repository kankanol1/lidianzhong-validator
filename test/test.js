var assert = require('assert');
var validator = require('../lib');

describe("Validator",function(){
    describe("#isEmail",function(){
        it("should return true when the string is an email address",function () {
            if(validator.isEmail('foo@bar.net')!==true){
                throw new Error("Validator not right");
            }
        });
    });
    describe("#isAllEnglish",function(){
        it("should return true when the string is an AllEnglish",function () {
            if(validator.isAllEnglish('isAllEnglish')!==true){
                throw new Error("Validator not right");
            }
        });
    });
});

