describe('CashBook API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'http://localhost:8084/api/CashBooks/ByOrigId?OriginId=db80ab00-686d-4020-b6d5-d6167da22f24',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});