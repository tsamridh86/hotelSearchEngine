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

$("#loginButton").click(function(){
	var userName = $("#userName").val();
	var password = $("#password").val();
	if(!userName)
	{
		alert("No userName!");
		return false;
	}
	else if(!password)
	{
		alert("No password!");
		return false;
	}
	var getFrom = 'login.php?userName='+userName+"&password="+password;
	$.ajax({
		url : getFrom,
		dataType : 'text',
		cache : false,
		contentType : false,
		type : 'get',
		success : function(response)
		{
			alert(response);
		},
		error : function(response)
		{
			alert("ajax error");
			alert(response);
		}
	});
});

$("#signUpButton").click(function(){
	var newUserName = $("#newUserName").val();
	var newPassword = $("#newPassword").val();
	var rePassword = $("#rePassword").val();
	if(!newUserName)
	{
		alert("No userName");
	}
	if(!newPassword)
	{
		alert("No password!");
	}
	if(newPassword != rePassword)
	{
		alert("The passwords do not match");
	}
	var formData = new FormData();
	formData.append('newUserName',newUserName);
	formData.append('newPassword',newPassword);
	$.ajax({
		url : 'login.php',
		dataType : 'text',
		cache : false,
		contentType : false,
		processData : false,
		data : formData,
		type : 'post',
		success : function(response)
		{
			alert(response);
		},
		error : function(response)
		{
			alert("ajax error!" + response);
		}
	});

});