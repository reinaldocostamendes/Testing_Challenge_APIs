describe('CashBook API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'http://localhost:8084/api/CashBooks/bb1f4eb6-6a9b-4b7d-cadf-08da5b5c0077',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});