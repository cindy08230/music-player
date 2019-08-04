<template lang="pug">
	.player-page
		.top
			.top__header
				router-link.top__header__hide(to="/music-player/album-list")
					img(src="../assets/chevron-down.svg")
				h2.top__header__title(v-text="nowAlbum.title")
			.top__album
				.top__album__image
					img(:src="nowAlbum.image")
			.top__bar
				.top__bar__slider
					.line
					.back
				.top__bar__time
					p.now 01:02
					p.all(v-text="songDuration ? songDuration : `00:00`")
			.top__functions
				.top__functions__add
					img(src="../assets/plus.svg")
				.top__functions__info
					h2.title(v-text="nowSong.title")
					p.subtitle(v-text="nowAlbum.singer")
				.top__functions__like
					img(src="../assets/heart.svg")
		.bottom
			.bottom__volume
				.bottom__volume__whisper
					img(src="../assets/volume_mute.svg")
				.bottom__volume__bar
					.line
					.back
				.bottom__volume__loud
					img(src="../assets/volume_up.svg")
			.bottom__functions
				.bottom__functions__random(@click='clickRandom')
					img(v-if="isRandom" src="../assets/shuffle_green.svg")
					img(v-else src="../assets/shuffle.svg")
				.bottom__functions__prew(@click="clickPrev")
					img(src="../assets/skip_previous.svg")
				.bottom__functions__play(@click="clcikPlay")
					.image-wrap
						img(v-if="isPlaying" src="../assets/pause_white.svg")
						img(v-else src="../assets/play_arrow_white.svg")
				.bottom__functions__next(@click="clickNext")
					img(src="../assets/skip_next.svg")
				.bottom__functions__repeat(@click="clickRepeat")
					img(v-if="isRepeat" src="../assets/repeat_green.svg")
					img(v-else src="../assets/repeat.svg")
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
		isPlaying:{
			type: Boolean,
			required: true
		},
		isRandom:{
			type: Boolean,
			required: true
		},
		isRepeat:{
			type: Boolean,
			required: true
		},
		songDuration:{
			type: String,
			required: false
		}
	},
	methods:{
		clcikPlay(){
			this.$emit('click-play')
		},
		clickPrev(){
			this.$emit('click-prev')
		},
		clickNext(){
			this.$emit('click-next')
		},
		clickRandom(){
			this.$emit('click-random')
		},
		clickRepeat(){
			this.$emit('click-repeat')
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

.player-page
	width: 100%
	height: 100%

	.top
		display: flex
		flex-direction: column
		justify-content: space-between
		width: 100%
		height: 75%
		background-color: #fff
		border-radius: 0 0 20px 20px
		box-shadow: 0px 5px 10px rgba(102, 102, 102, 0.2)

		&__header
			display: flex
			justify-content: center
			align-items: center
			position: relative
			color: $darkGreen
			text-align: center

			&__hide
				display: flex
				justify-content: center
				align-items: center
				position: absolute
				left: 15px
				cursor: pointer

		&__album
			border-radius: 8px
			max-width: 235px
			margin: 50px auto

			&__image
				width: 100%
				margin: 0 auto
		
		&__bar
			max-width: 315px
			width: 100%
			margin: 0 auto
			margin-bottom: 50px

			&__slider
				width: 100%
				height: 4px
				margin: 0 auto
				position: relative
				margin-bottom: 3px
				.line
					width: 30%
					height: 100%
					background-color: $green
					position: absolute
				.back
					width: 100%
					height: 100%
					background-color: rgba(102, 102, 102, 0.2)

			&__time
				display: flex
				justify-content: space-between
				font-size: 11px
				p
					font-size: 11px
					color: $gray
		&__functions
			display: flex
			justify-content: space-around
			align-items: center
			margin-bottom: 55px
			&__add
			&__info
				display: flex
				justify-content: space-around
				align-items: center
				flex-direction: column
				max-width: 200px
				width: 100%

				.title
					font-size: 18px
					font-weight: bold
					
				.subtitle
					font-size: 14px
					color: $green
			&__like
	.bottom
		display: flex
		flex-direction: column
		justify-content: center
		height: calc(25% - 68px)
		padding: 34px 26px

		&__volume
			display: flex
			justify-content: space-between
			align-items: center

			&__whisper, &__loud
				width: 24px

			&__bar
				max-width: 260px
				width: 100%
				height: 4px
				position: relative

				.line
					width: 30%
					height: 100%
					background-color: $green
					position: absolute

				.back
					width: 100%
					height: 100%
					background-color: rgba(102, 102, 102, 0.2)

		&__functions
			display: flex
			justify-content: space-between
			align-items: center
			margin-top: 34px
			&__random
				width: 26px
			&__prew
				width: 26px
			&__play
				width: 60px
				height: 60px
				border-radius: 50%
				display: flex
				justify-content: center
				align-items: center
				background-color: $green
				
				.image-wrap
					width: 30px
			&__next
				width: 26px
			&__repeat
				width: 26px
</style>
