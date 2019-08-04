<template lang="pug">
	.mini-player
		router-link.album-image(to="/music-player/player-page")
			img(:src="albumImage")
		router-link.song-title(to="/music-player/player-page" v-text="title")
		.play-icon(@click="clcikPlay")
			img(v-if="!isPlaying" src="../assets/play_arrow.svg")
			img(v-if="isPlaying" src="../assets/pause.svg")
</template>
<script>
export default {
  props:{
		nowSong:{
			type: Object,
			required: false,
			default: null
		},
		nowAlbum: {
			type: Object,
			required: false,
			default: null
		},
		isPlaying: {
			type: Boolean,
			required: true
		}
	},
	computed:{
		title(){
			return this.nowSong ? this.nowSong.title : ''
		},
		albumImage(){
			return this.nowAlbum ? this.nowAlbum.image : ''
		}
	},
	methods: {
		clcikPlay(){
			this.$emit('click-play')
		}
	}
}
</script>
<style lang="sass" scoped>
.mini-player
	width: 90%
	height: 50px
	max-width: 414px
	display: flex
	align-items: center
	padding: 5px
	margin: 0 auto
	position: fixed
	bottom: 65px
	left: 50%
	transform: translateX(-50%)
	background-color: #fff
	border-radius: 12px
	box-shadow: 0px 5px 10px rgba(102, 102, 102, 0.2)
	.album-image
		width: 40px
		margin-right: 10px
		border-radius: 8px
	.song-title
		color: #666
		font-size: 16px
		text-decoration: none
		width: 85%
	.play-icon
		width: 20px
		position: absolute
		right: 20px
</style>
