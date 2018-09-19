var colorSelected;

function makegrid(){
//this  funtion  creates the grid		

var x,y;

	     x = $('#fila').val();
    
         colorSelected =$('#color').val();
		 y = $('#columna').val();
		
	
		var cuadro=""
		//var cuadro="<table class='frame'>"
			
		for (var i=0;i<x;i++){
			
			console.log(i);
			console.log(x);
			cuadro=cuadro+"<tr>";
			for (var j=0;j<y;j++){
			   cuadro=cuadro+"<td>&nbsp</td>";
			
			}	
		    cuadro=cuadro+"</tr>";
		}      
		//cuadro=cuadro+"</table>";
		console.log(cuadro);
      $('.frame').html(cuadro);
}

$('table').on("click", "td", function (){
	$(this).css("background-color",colorSelected);
	console.log(colorSelected);
});
$( '#color' ).change(function() {
  colorSelected =$('#color').val();
});
	


$('#button').click(function(){
	
	
makegrid();

});




 