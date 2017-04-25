Vue.component('modalButton', {
	props: ['text'],
	template: `
		<button @click="isactive = true">{{ text }}</button>
		<div class="modal is-active" v-show="isactive">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="box">
					<slot></slot>
				</div>
			</div>
			<button class="modal-close" @click="isactive = false"></button>
		</div>
	`,
	data(){
		return {
			isactive: false
		}
	}
});

new Vue({
	el: '#root'
});

