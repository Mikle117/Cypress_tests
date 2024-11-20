describe('Проверка авторизации', function () {

       beforeEach('Начало теста', function () {
         cy.visit('/');
      });

       afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     });
    
       it('Верный пароль и верный логин', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
     })
 
       it('Проверка восстановления пароля', function () {
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('mikle@mail.ru')
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
     })

        it('Верный логин и неверный пароль', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })
 
        it('Неверный логин и верный пароль', function () {
         cy.get('#mail').type('mikle@mail.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
     })

        it('Ввести логин без @', function () {
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })

        it('В логине символы верхнего регистра', function () {
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
   })
 })
 