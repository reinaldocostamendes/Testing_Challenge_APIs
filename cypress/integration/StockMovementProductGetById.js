describe('Product API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'https://localhost:44379/api/Stock/Product/3fa85f64-5717-4562-b3fc-2c963f66afa6',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});