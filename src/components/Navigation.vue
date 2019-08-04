<template lang="pug">
	.navigation
		.navigation__item
			img(src="../assets/home.svg")
		.navigation__item
			img(src="../assets/heart-dark.svg")
		.navigation__item
			img(src="../assets/user.svg")
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.navigation
	display: flex
	align-items: center
	justify-content: center
	box-shadow: 0px -0.8px 0px rgba(102, 102, 102, 0.4)
	padding: 8px 0 15px
	position: fixed
	width: 100%
	max-width: 414px
	bottom: 0
	left: 50%
	transform: translateX(-50%)
	z-index: 99
	background-color: #eee
	margin: 0 auto
	&__item
		width: 33.333%
		display: flex
		align-items: center
		justify-content: center

		img
			max-width: 24px
</style>
