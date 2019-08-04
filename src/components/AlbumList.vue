<template lang="pug">
	.album-list
		router-link.header(to="/music-player")
			.header__icon
				img(src="../assets/chevron-left.svg")
			p.header__text Back
		.album
			.album__cover
				img(:src="album.image")
			.album__info
				h2.album__info__title(v-text="album.title")
				p.album__info__subtitle(v-text="album.singer")
		.function
			.function__wrap
				.function__wrap__icon
					img(src="../assets/heart.svg")
				p.function__wrap__text Like
			.function__wrap
				.function__wrap__icon
					img(src="../assets/share.svg")
				p.function__wrap__text Share
			.function__wrap
				.function__wrap__icon
					img(src="../assets/play_arrow.svg")
				p.function__wrap__text Play
		.list
			.list__song(v-for="(song, index) in songList" :key="index" @click="playNewSong(song)")
				p.list__song__index(v-text="index+1")
				p.list__song__title(v-text="song.title")
				.list__song__more
					img(src="../assets/more-horizontal.svg")
</template>
<script>
export default {
	props:{
		album: {
			type: Object,
			required: true,
			default: null
		}
	},
  data(){
		return{

		}
	},
	computed:{
		songList(){
			return this.album.songs
		}
	},
	methods: {
		playNewSong(song){
			this.$emit('set-new-song', song)
		}
	}
}
</script>
<style lang="sass" scoped>
$green: #66CCCC
$darkGreen: #1F9990
$darkGray: #404040
$gray: #666666
$lightGray: #EEEEEE

.album-list
	padding: 5px 15px 50px
	background-color: $lightGray
	.header
		display: flex
		text-decoration: none
		cursor: pointer
		&__icon
			width: 24px
		&__text
			font-size: 16px
			color: $darkGreen

	.album
		display: flex
		margin-top: 30px
		&__cover
			width: 100px
			height: 100px
			margin-right: 10px
		&__info
			&__title
				font-size: 16px
				font-weight: bold
			&__subtitle
				font-size: 14px
				color: $darkGreen

	.function
		height: 50px
		display: flex
		align-items: center
		border-top: 1px solid rgba(102, 102, 102, 0.2)
		border-bottom: 1px solid rgba(102, 102, 102, 0.2)
		margin: 20px 0
		color: $gray
		&__wrap
			width: 33.333%
			display: flex
			justify-content: center
			align-items: center
			&__icon
				margin-right: 10px
			&__text
				font-size: 16px

	.list
		color: $darkGray
		&__song
			display: flex
			margin-bottom: 25px
			&__index
				width: 10%
			&__title
				width: 82%
			&__more
				width: 8%
</style>
