
describe("Login Form Tests", () => {
    it("Successful login", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#eposta").type("test@gmail.com");
        cy.get("#sifre").type("Test1234!");
        cy.get("#check").check();
        cy.get('button[type="submit"]').should('be.enabled').click();
        cy.contains("Giriş Başarılı!").should("be.visible");
        cy.contains("Hoş geldiniz!").should("be.visible");
    });
    it("Invalid email", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#eposta").type("testgmail.com");
        cy.get("#sifre").type("Test1234!");
        cy.get("#check").check();
        cy.get("form p").should("have.length", 1)
        cy.get('button[type="submit"]').should('be.disabled')
        cy.contains('Geçerli bir e-posta adresi giriniz.').should('be.visible')
        
    });
    it("Invalid email and password", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#eposta").type("testgmail.com");
        cy.get("#sifre").type("123");
        cy.get("#check").check();
        cy.get("form p").should("have.length", 2)
        cy.get('button[type="submit"]').should('be.disabled')
        cy.contains('Geçerli bir e-posta adresi giriniz.').should('be.visible')
        cy.contains('Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.').should('be.visible')
    });
     it("Terms not accepted", () => {
        cy.visit("http://localhost:5173/");
        cy.get("#eposta").type("test@gmail.com");
        cy.get("#sifre").type("Test1234!");
        cy.get("#check").should("not.be.checked")
        cy.get('button[type="submit"]').should('be.disabled')
    });
});

