describe('BuyRequest API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'http://localhost:8085/api/BuyRequests/ClientId?id=3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});