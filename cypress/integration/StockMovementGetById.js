describe('StockMovement API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'https://localhost:44379/api/StockMovements/StockMovementById?id=1bdc4774-d65e-4701-a593-d308020ebe90',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});