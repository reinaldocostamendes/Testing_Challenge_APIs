describe('CashBook API', function(){
    it('POST', function(){
        cy.request({
            method:'POST',
            url: 'http://localhost:8084/api/CashBooks',
            body:{
                "origin": 0,
                "originId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "type": 1,
                "value": -20
              },
              headers:{
               'content-type' : 'application/json' 
              }
        }).then(function(response){
            expect(response.body).have.property('id');
          
        });

    });
});