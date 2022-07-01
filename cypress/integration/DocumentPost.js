describe('Document API', function(){
    it('POST', function(){
        cy.request({
            method:'POST',
            url: 'http://localhost:8086/api/Documents',
            body:{
              "number": "string",
              "date": "2022-07-01T08:49:26.562Z",
              "documentType": 1,
              "operation": 1,
              "payed": true,
              "paymentDate": "2022-07-01T08:49:26.562Z",
              "description": "string",
              "total": 10,
              "observation": "string"
            },
              headers:{
               'content-type' : 'application/json' 
              }
        }).then(function(response){
            expect(response.body).have.property('id');
          
        });

    });
});