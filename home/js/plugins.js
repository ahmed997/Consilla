$(document).ready(function () {

	const
		searchBox = $(".search .input-group input"),
		typeNewPost = $(".type-new-post"),
		showReplies = $(".view-reply");

	$(".sticky").sticky({topSpacing: 100});
	/*$(".sticky-left").sticky({topSpacing: 77});*/

	searchBox.on("focus", function () {
		$(".nav .search .input-group-btn .btn-secondary").css('border-color', '#E8E8E8');
	});
	searchBox.on("blur", function () {
		$(".nav .search .input-group-btn .btn-secondary").css('border-color', '#808080');
	});

	$("#postClose").on("click", function () {
		$("#postModal").modal("hide");
	});
	$("#pollClose").on("click", function () {
		$("#pollModal").modal("hide");
	});

	$("#imageClose").on("click", function () {
		$('#imageModal').modal("hide");
	});

	typeNewPost.keyup(function () {
		$(".remaining").text((200 - $(this).val().length));
	});

	showReplies.on("click", function () {
		$(".comments-box").fadeIn();
	});

	$('.imgClick').click(function () {
		var loc = $(this).attr("src");
		$('#imgPostSource').attr("src", loc);
	});

	$('#messagesToggle').on('click', function () {
		$('.post-card').fadeOut(200);
		$('.post-card-hidden').delay(200).fadeIn(200);
	});
	$('.message-reply').on('click', function () {
		$('.post-card').fadeOut(200);
		$('.post-reply-hidden').delay(200).fadeIn(200);
	});
	const postTent = $('#postContent').text();
	$('#editPost').text(postTent);
});