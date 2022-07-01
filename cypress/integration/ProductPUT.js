describe('Product API', function(){

    it('PUT', function(){
        cy.request({
            method:'PUT',
            url: 'http://localhost:8087/api/Products',
            body:  {
                "buyRequestId": "486a4dba-c8ef-4a45-e2b9-08da47ca41e0",
                "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "productDescription": "string",
                "productCategory": 1,
                "quantity": 10,
                "value": 110,
                "id": "f21ec6ec-2051-4444-02f1-08da47ca41f0"
              },
              headers:{
               "content-type" : "application/json"
              }
        }).then(function(response){
            expect(response.body).have.property('id');
        
        });

    });
});