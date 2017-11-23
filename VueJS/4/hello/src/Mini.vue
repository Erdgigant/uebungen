<template>
	<div class="mini" :class="{hide: mini == $parent.miniStorage, dragEffect: dragEffect}">

		<p class="header">
			<span @click="$parent.remove(mini)">X</span>
			<span @click="$parent.update(mini)">⟲</span>
			<span @click="$parent.add(mini)">+</span>
			<b v-if="mini.text">{{ mini.text }}</b>
		</p>

		<input type="text" @keyup.enter="$parent.update(mini)" v-model="mini.id"/>

		<p v-if="mini.name">{{ mini.name }}</p>

		<img v-if="mini.icon" :src="mini.icon"/>
	</div>
</template>

<script>
	export default {
		props: ['mini'],
		data: function() {
			return {
				dragEffect: false
			}
		}
	}
</script>