describe('BuyRequest API', function(){

    it('DELETE', function(){

        cy.request({
            method:'DELETE',
            url: 'http://localhost:8085/api/BuyRequests?id=3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }).then(function(response){
            expect(true).to.be.true
        });

    });
});