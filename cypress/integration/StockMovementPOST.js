describe('StockMovement API', function(){
    it('POST', function(){
        cy.request({
            method:'POST',
            url: 'https://localhost:44379/api/StockMovements',
            body:{
                "originId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "origin": 1,
                "type": 1,
                "date": "2022-07-01T10:06:02.233Z",
                "products": [
                  {
                    "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "productDescription": "string",
                    "productType": 1,
                    "quantity": 10,
                    "unitValue": 10,
                    "storageId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "storageDescription": "string"
                  }
                ]
              },
              headers:{
               'content-type' : 'application/json' 
              }
        }).then(function(response){
            expect(response.body).have.property('true');
          
        });

    });
});