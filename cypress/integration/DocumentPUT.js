describe('Document API', function(){

    it('PUT', function(){
        cy.request({
            method:'PUT',
            url: 'http://localhost:8086/api/Documents',
            body:{
              "number": "string",
              "date": "2022-06-09T18:06:15.939",
              "documentType": 1,
              "operation": 1,
              "payed": true,
              "paymentDate": "2022-06-09T18:06:15.939",
              "description": "Para CashBook",
              "total": 350,
              "observation": "Para CashBook",
              "id": "9fd62c0d-c0e0-4561-8399-1532353f0393"
            },
              headers:{
               "content-type" : "application/json"
              }
        }).then(function(response){
            expect(response.body).have.property('id');
        
        });

    });
});