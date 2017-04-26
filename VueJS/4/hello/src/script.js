//Imports
import $ from 'jQuery';
import Vue from 'vue';
import MiniComponent from './Mini.vue';

var node = document.createElement('style');
node.innerHTML = require('./stylesheet.css').toString();
document.body.appendChild(node);
//Mini class
var Mini = function(list){
	this.list = list;
	this.uid = Mini.uidStorage++;
};

Mini.uidStorage = 0;

//Vue Instance
var app = new Vue({
	el: '#wrapper',
	data: {
		minis: [
			new Mini(0),
			new Mini(1)
		],
		miniStorage: null
	},
	methods: {
		getMinisByList(list){
			return this.minis.filter(function(val){
				return val.list == list;
			});
		},
		add: function(mini) {
			this.minis.splice(this.minis.indexOf(mini)+1, 0, new Mini(mini.list));
		},
		remove: function(mini){
			this.minis.splice(this.minis.indexOf(mini), 1);
			if(!this.getMinisByList(mini.list).length){
				this.add(mini);
			}
		},
		update: function(mini){
			var id = mini.id;
			if(id != '' && !isNaN(id)) {
				console.log('Searching for mini with id ' + id);
				$.ajax({
					data: {
						lang: 'de'
					},
					url: 'https://api.guildwars2.com/v2/minis/' + id,
					method: 'GET',
					context: this,
					complete: function (result) {
						console.log('Finished for mini with id ' + id);
						var index = this.minis.indexOf(mini);
						delete this.minis[index].text;
						this.minis[index] = Object.assign({}, this.minis[index], result.responseJSON);
						this.minis = Array.from(this.minis); //Force to update
					}
				});
			}
		},
		drag: function(mini, e){
			this.miniStorage = mini;
		},
		drop: function(e){
			var index = this.minis.indexOf(this.miniStorage);
			this.minis[index].list = +e.currentTarget.id[e.currentTarget.id.length-1];
			this.miniStorage = null;
		}
	},
	components: {
		Mini: MiniComponent
	}
});