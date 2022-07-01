describe('CashBook API', function(){

    it('PUT', function(){
        cy.request({
            method:'PUT',
            url: 'http://localhost:8084/api/CashBooks',
            body: {
                "id": "bb1f4eb6-6a9b-4b7d-cadf-08da5b5c0077",
                "origin": 0,
                "originId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "description": "string",
                "type": 1,
                "value": -40
              },
              headers:{
               "content-type" : "application/json"
              }
        }).then(function(response){
            expect(response.body).have.property('id');
        
        });

    });
});