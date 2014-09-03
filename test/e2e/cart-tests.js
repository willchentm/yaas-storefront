var fs = require('fs');
var tu = require('./protractor-utils.js');


describe("cart:", function () {



   describe("verify cart functionality", function () {

     beforeEach(function () {
         // ENSURE WE'RE TESTING AGAINST THE FULL SCREEN VERSION
       browser.driver.manage().window().maximize();
       browser.get(tu.tenant + '/#!/products');
       browser.sleep(8000);
     });


       // it('should load one product into cart', function () {
       //   tu.clickElement('id', tu.cartButtonId);
       //   browser.sleep(250);
       //   expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
       //   tu.clickElement('xpath', tu.contineShopping);
       //   tu.clickElement('xpath', tu.frenchPress);
       //   tu.clickElement('id', tu.buyButton);
       //   browser.sleep(250);
       //   tu.verifyCartAmount("1");
       //   tu.verifyCartTotal("$24.57");
       //   tu.clickElement('xpath', tu.removeFromCart);
       //  browser.sleep(1000);
       //   expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');

       // });

       //   it('should load multiple products into cart', function () {
       //     tu.clickElement('id', tu.cartButtonId);
       //     browser.sleep(250);
       //     expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
       //     tu.clickElement('xpath', tu.contineShopping);
       //     browser.sleep(250);
       //     tu.clickElement('xpath', tu.frenchPress);
       //     tu.clickElement('id', tu.buyButton);
       //     browser.sleep(250);
       //     tu.verifyCartAmount("1");
       //     browser.sleep(1000);
       //     tu.verifyCartTotal("$24.57");
       //     tu.clickElement('xpath', tu.contineShopping);
       //     browser.sleep(500);
       //     tu.clickElement('css', 'img');
       //     browser.sleep(250);
       //     tu.clickElement('xpath', tu.ringBowl);
       //     tu.clickElement('id', tu.buyButton);
       //     browser.sleep(1000);
       //     tu.verifyCartTotal("$26.57");

       //   });

         it('should update quantity', function () {
           tu.clickElement('id', tu.cartButtonId);
           browser.sleep(250);
           expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
           tu.clickElement('xpath', tu.contineShopping);
           browser.sleep(250);
           tu.clickElement('xpath', tu.frenchPress);
           tu.clickElement('id', tu.buyButton);
           browser.sleep(250);
           tu.verifyCartAmount("1");
           browser.sleep(1000);
           tu.verifyCartTotal("$24.57");
           tu.clickElement('xpath', tu.contineShopping);
           browser.sleep(250);
           tu.clickElement('id', tu.buyButton);
           browser.sleep(3000);
           tu.verifyCartAmount('2');
           browser.sleep(1000);
           tu.verifyCartTotal('$49.14');
           tu.sendKeysByXpath(tu.cartQuantity, '5');
           tu.verifyCartAmount("5");
           tu.verifyCartTotal("$122.85");
           tu.sendKeysByXpath(tu.cartQuantity, '10');
           tu.verifyCartAmount("10");
           tu.verifyCartTotal("$245.70");
         });

         it('should not add out of stock item', function () {
           tu.clickElement('id', tu.cartButtonId);
           browser.sleep(250);
            expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
           tu.clickElement('xpath', tu.contineShopping);
           tu.clickElement('xpath', tu.chemex);
           tu.clickElement('xpath', tu.outOfStockButton);
           tu.clickElement('id',tu.cartButtonId);
           browser.sleep(250);
            expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
           tu.clickElement('xpath', tu.contineShopping);
         });

         it('should not allow negative numbers', function () {
          tu.clickElement('id', tu.cartButtonId);
          browser.sleep(250);
         expect(element(by.xpath("//div[@id='cart']/div[2]")).getText()).toEqual('YOUR CART IS EMPTY');
          tu.clickElement('xpath', tu.contineShopping);
          tu.clickElement('xpath', tu.frenchPress);
          tu.clickElement('id', tu.buyButton); 
          browser.sleep(250);
          tu.verifyCartTotal("$24.57");
          tu.sendKeysByXpath(tu.cartQuantity, '-5');
          tu.verifyCartAmount('5');
          browser.sleep(250);
          tu.verifyCartTotal('$122.85');
          tu.sendKeysByXpath(tu.cartQuantity, 'it should not accept alpha');
          tu.verifyCartAmount('');
          tu.verifyCartTotal('$122.85');
         });

   });
});

