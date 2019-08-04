<template lang="pug">
	.index
		.index__search
			.index__search__icon
				img(src="../assets/search.svg")
			input.index__search__input(type="text")
		.index__recom
			.index__recom__head
				h2.index__recom__head__title Recommended
				p.index__recom__head__all See All
			.index__recom__albums
				.album(v-for="recom in recomConfig" @click="chooseList(recom)")
					.album__image
						img(:src="recom.image")
					p.album__title(v-text="recom.title")
					p.album__singer(v-text="recom.singer")

</template>
<script>
export default {
	props:{
		recomConfig: {
			type: Array,
			required: true
		}
	},
	data() {
		return{
		}
	},
	methods:{
		chooseList(album){
			this.$emit('change-list', album)
			this.$router.push({ path: '/music-player/album-list'})
		}
	}
	
}
</script>

<style lang="sass" scoped>
.index
	max-width: 414px
	padding: 30px 15px

	&__search
		display: flex
		align-items: center
		border: 1px solid rgba(102, 102, 102, 0.2)
		border-radius: 8px
		padding: 0 10px

		&__icon
			margin-right: 10px

		&__input
			width: 100%
			height: 36px
			border: none
			background: transparent
			outline: none
	&__recom
		margin-top: 21px
		&__head
			display: flex
			justify-content: space-between
			margin-bottom: 12px
			&__title
				color: #404040
				margin: 0
			&__all
				color: #666666
				margin: 0
		&__albums
			display: flex
			flex-wrap: wrap
			justify-content: space-between
			.album
				width: 47%
				margin-bottom: 22px
				&__image
					width: 100%
				&__title
					width: 100%
					margin: 0
					margin-top: 5px
					font-size: 11px
					color: #404040
				&__singer
					width: 100%
					margin: 0
					font-size: 11px
					color: #808080
</style>
