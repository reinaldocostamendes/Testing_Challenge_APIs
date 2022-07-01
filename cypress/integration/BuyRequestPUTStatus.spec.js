describe('BuyRequest API', function(){
    it('PUT', function(){
      cy.request({
          method:'PUT',
          url: 'http://localhost:8085/api/BuyRequests/ChangeStatus',
          body:{
            "id": "30368a27-c7c0-4b9d-c8b6-08da5ad50526",
            "buyRequestStatus": 4
          },
            headers:{
             "content-type" : "application/json"
            }
      }).then(function(response){
          expect(response.body).have.property('id');
      
      });

  });
});