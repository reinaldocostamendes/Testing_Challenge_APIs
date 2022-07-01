describe('BuyRequest API', function(){
    it('POST', function(){
        cy.request({
            method:'POST',
            url: 'http://localhost:8085/api/BuyRequests',
            body:{
                "code": 123,
                "date": "2022-06-29T14:02:42.098Z",
                "deliveryDate": "2022-06-29T14:02:42.098Z",
                "products": [
                  {
                    "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "productDescription": "string",
                    "productCategory": 1,
                    "quantity": 10,
                    "value": 30
                  }
                ],
                "client": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "clientDescription": "string",
                "clientEmail": "string@gmail.com",
                "clientPhone": "string",
                "status": 1,
                "street": "string",
                "streetNumber": "string",
                "sector": "string",
                "complement": "string",
                "city": "string",
                "state'": "string",
                "discoun": 10,
                "costValue": 40
              },
              headers:{
               'content-type' : 'application/json' 
              }
        }).then(function(response){
            expect(response.body).have.property('id');
          
        });

    });
});