$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-cool').hide();
		$('.hadouken').finish().show()
		.animate(
			{'left': '300px'}, 
			500,
			function() {
				$(this).hide();
				$(this).css('left', '-210px');
			}
		);
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
	});
	
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide;
		}
	})
	.keyup(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide;
		}
	});
});

function playHadouken () {
  	$('#hadouken-sound')[0].volume = 0.5;
 	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}