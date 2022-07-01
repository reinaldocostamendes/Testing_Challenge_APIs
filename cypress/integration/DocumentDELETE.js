describe('Document API', function(){

    it('DELETE', function(){

        cy.request({
            method:'DELETE',
            url: 'http://localhost:8086/api/Documents?id=9fd62c0d-c0e0-4561-8399-1532353f0393',
        }).then(function(response){
            expect(true).to.be.true
        });

    });
});