describe('Product API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'http://localhost:8087/api/Products/GetById?Id=f21ec6ec-2051-4444-02f1-08da47ca41f0',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});