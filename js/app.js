$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		stateChange('ryu-ready');
	})
	
	.mouseleave(function() {
		stateChange('ryu-still');
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
		stateChange('ryu-ready');
	});
	
	$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			stateChange('ryu-cool');
		}
	})

	.keyup(function(e) {
		if (e.keyCode == 88) {
			stateChange('ryu-still');
		}
	});
});

function playHadouken () {
  	$('#hadouken-sound')[0].volume = 0.5;
 	$('#hadouken-sound')[0].load();
  	$('#hadouken-sound')[0].play();
}

function stateChange(str) {
    $('.ryu-image').hide();
    $('.' + str).show();
}