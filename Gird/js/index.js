var app = new Vue({
	el: '#demo',
	mounted: function() {
		window.addEventListener('scroll', this.onScroll);
			this.addMoreColors();
	},
	methods: {
		onScroll: function(e) {
			this.addMoreColors();
			
			// if (window.Height  document.body.offsetHeight) {
			// 	this.addMoreColors();
			// }
		},
		addMoreColors: function() {
			this.colors = this.colors.concat([{
				hex: "#f6d258"
			}, {
				hex: "#efcec5"
			}, {
				hex: "#d1af94"
			}, {
				hex: "#97d5e0"
			}, {
				hex: "#f6d258"
			}, {
				hex: "#efcec5"
			}]);
		}
	},
	data: function() {
		return {
			colors: [{
					hex: "#f6d258"
				},
				{
					hex: "#efcec5"
				},
				{
					hex: "#d1af94"
				},
				{
					hex: "#97d5e0"
				},
				{
					hex: "#f6d258"
				},
				{
					hex: "#efcec5"
				},
				{
					hex: "#97d5e0"
				},
				{
					hex: "#f6d258"
				},
				{
					hex: "#efcec5"
				},
				{
					hex: "#d1af94"
				},
				{
					hex: "#efcec5"
				},
				{
					hex: "#f6d258"
				},
				{
					hex: "#97d5e0"
				},
				{
					hex: "#d1af94"
				},
				{
					hex: "#f6d258"
				}
			]
		}
	}
})
