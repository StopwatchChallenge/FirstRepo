describe("Testing if the function onclick() is working.", function(){

	var btn;
	beforeEach(function() {
		btn = document.getElementById('start');
	});


  	it("The button should invoke the startPause() function", function(){
  		btn.click();
   
    	expect(time).toContain(0);
  });
