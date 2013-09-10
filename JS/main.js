//Pedro J Rodriguez
//ASD sep 2013
//main.js file

$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
	
});	

var parseMyForm = function(data){
	// use of form data here;
	console.log(data);
	};
	
$('#formpage').on('pageinit', function(){

		var myFormOne = $('#formOne'),
			formErrorLink = $('#formErrorLink');
			
		    myFormOne.validate({
			invalidHandler: function(form, validator) {
				formErrorLink.click();
				var html = '';
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>'+ fieldName +'</li>';
				};
				
				$("errorDialog.html ul").html(html);
			},
			submitHandler: function() {
		var data = myFormOne.serializeArray();
			parseMyFormData(data);
		}
	});
	
	