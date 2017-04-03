$(document).ready(function() {
	$('select').material_select();
	$('.modal').modal();
	$(".bookNow").hide();

	
});

$(".more").click(function(){
	$(".hidden").toggle("slow");
});


//This is to login a user
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
	var getFrom = 'login.php?userName='+userName+'&password='+password;
	$.ajax({
		url : getFrom,
		dataType : 'text',
		cache : false,
		contentType : false,
		type : 'get',
		success : function(response)
		{
			if(response == "invalid login details.")
			{
				alert("invalid login details");
				return false;
			}
			var loggedIn = JSON.parse(response);
			alert("Welcome! "+loggedIn['userName']);
			$("#userId").val(loggedIn['userId']);
			$("#userNamePlace").val(loggedIn['userName']);
		},
		error : function(response)
		{
			alert("ajax error");
			alert(response);
		}
	});
});


//This is to signup a new user.
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

function bookNow(element)
{
	// alert($(element).data("hotelid"));
	if($("#userId").val() < 0 )
	{
		alert("you need to login");
		return false;
	}
	$("#bookingModal").modal("open");
	console.log($(element).data("hotel-name"));
	$("#modalHotelName").text($(element).data("hotel-name"));
	$("#modalPrice").text($(element).data("hotel-room-cost"));
}