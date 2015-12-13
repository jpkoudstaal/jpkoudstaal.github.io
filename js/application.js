$(function() {

	$('.waypoint').waypoint(function(direction) {
		$(this.element).addClass('is-visible');
		console.log(this.element);
		// console.log(this.element.id + ' hit')
	}, {
		offset: '50%'
	});
});
