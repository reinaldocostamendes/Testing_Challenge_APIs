describe('Document API', function(){

    it('GET', function(){

        cy.request({
            method:'GET',
            url: 'http://localhost:8086/api/Documents/9fd62c0d-c0e0-4561-8399-1532353f0393',
        }).then(function(response){
            expect(response.body).have.property('id')
        });

    });
});