$(document).ready(function() {
	$('select').material_select();
	$('.modal').modal();
	
});

$("#query").change(function(){
		$("#search").trigger("click");
	});

$(".more").click(function(){
	$(".hidden").toggle("slow");
});



String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


//function to upload the file
$("#uploadFile").click(function(){
	var fileData = $("#uploadTarget").prop('files')[0];
	if(fileData == null)
	{
		alert("No file to be added!");
		return false;
	}
	var formData = new FormData();
	formData.append('file',fileData);
	$.ajax({
		url : 'addFile.php',
			dataType : 'text' , //what to expect from the server
			cache : false,
			contentType : false,
			processData : false,
			data : formData,
			type: 'post',
			success : function(response)
			{
				alert(response);
			}
		});
	});

//function to update the file
$("#updateFile").click(function(){
	var fileData = $("#updateTarget").prop('files')[0];
	var fileId = $("#updateId").val();
	if (!fileId)
	{
		alert("Replacement Id Not Found");
		return false;
	}
	if(fileData == null )
	{
		alert("Replacement File Not Found");
		return false;
	}
	var formData = new FormData();
	formData.append('updateId',fileId);
	formData.append('file',fileData);
	$.ajax({
		url : 'updateFile.php',
		dataType : 'text',
		cache : false,
		contentType : false,
		processData : false,
		data : formData,
		type : 'post',
		success : function(response){
			alert(response);
			$("#search").trigger("click");
		}
	});
});


//function to delete the file
$("#deleteFile").click(function(){
	var fileId = $("#deleteId").val();
	if(!fileId)
	{
		alert("No File to be deleted");
		return false;
	}
	var formData = new FormData();
	formData.append('deleteId',fileId);
	$.ajax({
		url : 'deleteFile.php',
		dataType : 'text',
		cache : false,
		contentType : false,
		processData : false,
		data : formData,
		type : 'post',
		success : function(response){
			alert(response);
			$("#search").trigger("click");
		}
	});
});