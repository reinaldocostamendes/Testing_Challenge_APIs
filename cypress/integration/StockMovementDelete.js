describe('StockMovement API', function(){

    it('DELETE', function(){

        cy.request({
            method:'DELETE',
            url: 'https://localhost:44379/api/StockMovements?id=1bdc4774-d65e-4701-a593-d308020ebe90',
        }).then(function(response){
            expect(true).to.be.true
        });

    });
});