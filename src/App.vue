<template lang="pug">
  .player(:class="{'player-page': params === 'player-page'}")
    router-view
    .player__header(:class="{'player-page': params === 'player-page'}" @click="NextSong")
      p 12:22
      i.fas.fa-battery-full
    .player__wrap(:class="{'have-navi': params !== 'player-page'}")
      HomePage(v-if="!params" :recom-config="recomConfig" v-on:change-list="setList")
      AlbumList(
        v-if="params === 'album-list'"
        :album="albumListConfig" 
        v-on:set-new-song="setNewSong")
      PlayerPage(
        v-if="params === 'player-page'"
        :now-song="nowSong"
        :now-album="nowAlbum"
        :is-playing="isPlaying"
        :is-random="isRandom"
        :is-repeat="isRepeat"
        :song-duration="songDuration"
        v-on:click-play="clickPlayButton"
        v-on:click-prev="PrevSong"
        v-on:click-next="NextSong"
        v-on:click-random="isRandom = !isRandom"
        v-on:click-repeat="isRepeat = !isRepeat")
      MiniPlayer(
        v-if="params !== 'player-page'"
        :now-song="nowSong" :now-album="nowAlbum"
        :is-playing="isPlaying"
        v-on:click-play="clickPlayButton")
    audio(ref="audioEle" :loop="isRepeat" @ended="songEnded")
      source(:src="songUrl")
    Navigation(v-if="params !== 'player-page'")
</template>

<script>
import HomePage from './components/HomePage'
import PlayerPage from './components/PlayerPage'
import AlbumList from './components/AlbumList'
import Navigation from './components/Navigation'
import MiniPlayer from './components/MiniPlayer'
export default {
  name: 'App',
  components: {
    HomePage,
    PlayerPage,
    AlbumList,
    Navigation,
    MiniPlayer
  },
  data(){
    return{
      recomConfig: [
				{
          handle: 'album-1',
          title: "垂直活著，水平留戀著",
          singer: "艾怡良",
          image: "https://i.kfs.io/album/global/44564056,0v1/fit/500x500.jpg",
          songs: [
            {
              albumHandle: 'album-1',
              title: "玻璃心",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzs-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612405_7064e9167b466f14f7ceb8c022c2f90d"
            },
            {
              albumHandle: 'album-1',
              title: "滅了我",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzgz0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612420_9cc448c86830cfc4d79d8269a867c0e1"
            },
            {
              albumHandle: 'album-1',
              title: "一整夜",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzk00mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612428_f20103276b8666bc10407b1a18bae246"
            },
            {
              albumHandle: 'album-1',
              title: "給朱利安",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzk_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612439_ce86b2cc4dabbe79ec3b94ee9e0bae5e"
            },
            {
              albumHandle: 'album-1',
              title: "十四號登機門",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzYw0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612484_31ed9acb1ed068961437f627075a6798"
            },
            {
              albumHandle: 'album-1',
              title: "討厭艾瑞斯",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0inzc10mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612496_c7280116e959d184133a0a7a9636c3fa"
            },
            {
              albumHandle: 'album-1',
              title: "萊特兄弟有罪",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0imD420mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612505_2565c58c87add0449be1248ef6d21972"
            },
            {
              albumHandle: 'album-1',
              title: "美術課",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0imD4x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612515_b7b6874f287564e11cc9bf30871592e5"
            },
            {
              albumHandle: 'album-1',
              title: "夜晚出生的小孩",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0imD8y0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612523_1660d3443553e2b7ffe931fafffeae0d"
            },
            {
              albumHandle: 'album-1',
              title: "Forever Young",
              audioLink: "https://fs-preview.kfs.io/201307/09YlZu0imDw30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612533_849876c7ce2aeaa7865823b836f6eaa7"
            }
          ]
				},
				{
          handle: 'album-2',
          title: "末路狂花",
					singer: "魏如萱",
          image: "https://i.kfs.io/album/global/19875540,2v1/fit/500x500.jpg",
          songs: [
            {
              albumHandle: 'album-2',
              title: "一萬個不回頭的方法",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmz400mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612558_295886beb01b948f8cd96af2235a25ee"
            },
            {
              albumHandle: 'album-2',
              title: "末路狂花",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmz4_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612569_17f91d3344fc6830c597c6b602c11af1"
            },
            {
              albumHandle: 'album-2',
              title: "I will be fine",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmz8w0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612578_0a514640d3e67c30421aed757301570b"
            },
            {
              albumHandle: 'album-2',
              title: "無聲電影",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmzw10mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612586_6f57ed928077e79b50b80f6da9bb52b1"
            },
            {
              albumHandle: 'album-2',
              title: "賈科梅蒂",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmz020mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612595_d46e550572881115550f18529a5bdc72"
            },
            {
              albumHandle: 'album-2',
              title: "雪女",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmz0x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612604_8f69fe2b756d69150be2fdce53945b59"
            },
            {
              albumHandle: 'album-2',
              title: "小魚",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmzoy0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612613_162df8d757396b73349f6b0005fc2b3a"
            },
            {
              albumHandle: 'album-2',
              title: "你啊你啊",
              audioLink: "https://fs-preview.kfs.io/201307/0t4qae8qnzk30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmk=?__gda__=1572612620_9c64578d12ac9b710f3ea0a4a9aab983"
            },
            {
              albumHandle: 'album-2',
              title: "夢露",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmzs-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612645_81446d5ef1563bc9101ab152b6f0ca52"
            },
            {
              albumHandle: 'album-2',
              title: "歪",
              audioLink: "https://fs-preview.kfs.io/201307/0t8sYuwmmzs30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612631_2421ba8a36360400a05d070719fdb546"
            }
          ]
				},
				{
          title: "ØZI：The Album",
          handle: 'album-3',
					singer: "ØZI",
          image: "https://i.kfs.io/album/global/36730395,0v1/fit/500x500.jpg",
          songs: [
            {
              albumHandle: 'album-3',
              title: "Øzymandias - Intro",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimTkz0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612698_d9a9b512555155a128144a6584664eba"
            },
            {
              albumHandle: 'album-3',
              title: "Diamond (鑽石)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimTY00mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612707_ac5125704472c42e43d15396ab2ad8c5"
            },
            {
              albumHandle: 'album-3',
              title: "Paradise Island (天堂島)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimTY_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612715_9e7c238670a94dd802abc1a4568cedd4"
            },
            {
              albumHandle: 'album-3',
              title: "We Out Here",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimTcw0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612726_edd56a64dd48a297595b6df554d86488"
            },
            {
              albumHandle: 'album-3',
              title: "B.O.",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimj410mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612737_b47a1c9daceed11d50d4d845316e61e3"
            },
            {
              albumHandle: 'album-3',
              title: "Wings (翅膀)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimj820mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612747_c6fae198d3c29e06c1f6d9c12d8a943e"
            },
            {
              albumHandle: 'album-3',
              title: "Me Instead (奪愛)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimj8x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612756_ee9845b789bc13b8753ab97f6d2e6367"
            },
            {
              albumHandle: 'album-3',
              title: "Bad Intentions (企圖)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimjwy0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612765_2c1f89958d85b747e8e5e259cdc8d78c"
            },
            {
              albumHandle: 'album-3',
              title: "Prey (掠食)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimj030mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612772_3a764b8969f1848ece61f62bd7270c1e"
            },
            {
              albumHandle: 'album-3',
              title: "Title (頭銜)",
              audioLink: "https://fs-preview.kfs.io/201307/09ooaOIimj0-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612781_8be393c8aad17b550dcb5399effdd0ae"
            },
          ]
				},
				{
          title: "沙發海",
          handle: 'album-4',
					singer: "陳綺貞",
          image: "https://i.kfs.io/album/global/42357829,3v1/fit/500x500.jpg",
          songs: [
            {
              albumHandle: 'album-4',
              title: "傷害",
              audioLink: "https://fs-preview.kfs.io/201307/09Ysae4jmzc20mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmk=?__gda__=1572612247_fa460a6ec8e8d2998609b3a7258af008"
            },
            {
              albumHandle: 'album-4',
              title: "小船",
              audioLink: "https://fs-preview.kfs.io/201307/09YvZeglmTw20mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmk=?__gda__=1572612269_5101bad1e3e19ea8a83e8c8fbe42da83"
            },
            {
              albumHandle: 'album-4',
              title: "殘缺的彩虹",
              audioLink: "https://fs-preview.kfs.io/201307/09kqaO0lnjsy0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVm4=?__gda__=1572612305_aae2e85168581597060339ab2a23b0c0"
            },
            {
              albumHandle: 'album-4',
              title: "台北的某個地方",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnD4x0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572608789_779f24809c05ccb2080d03b013f63297"
            },
            {
              albumHandle: 'album-4',
              title: "沙發海",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnD8y0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612293_2e13e8c791766fd6589b3c3c55d21872"
            },
            {
              albumHandle: 'album-4',
              title: "跳舞吧",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnDw30mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612336_fa400b4c5e13a6d9729a30ebd0b7bd80"
            },
            {
              albumHandle: 'album-4',
              title: "他說",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnDw-0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612145_92298a6535c622d1e47c209dc8fa0175"
            },
            {
              albumHandle: 'album-4',
              title: "華生",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnD0z0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612350_1958cb7ff1cb519e001bbde612c70fc4"
            },
            {
              albumHandle: 'album-4',
              title: "變色龍",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnDo00mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612359_84d04305dd064cbab021ce279620707e"
            },
            {
              albumHandle: 'album-4',
              title: "觀察者",
              audioLink: "https://fs-preview.kfs.io/201307/09ctZO4gnDo_0mpLw_FUBtFAQnzkfdWeKlkkrtwLN8CDky3dVmg=?__gda__=1572612368_f6fa7e9f4d9de778d40d0e22d9d2b2ec"
            }
          ]
				}
			],
      nowAlbum: null,
      albumListConfig: null,
      nowSong: null,
      isPlaying: false,
      isRandom: false,
      isRepeat: false,
      songDuration: ''
    }
  },
  mounted(){
    this.nowAlbum = this.recomConfig[0]
    this.albumListConfig = this.recomConfig[0]
    this.nowSong = this.nowAlbum.songs[0]
  },
  computed: {
    params() {
      const params = this.$route.params.type

      return params
    },
    songUrl() {
      return this.nowSong ? this.nowSong.audioLink : ''
    }
  },
  watch: {
    songUrl(){
      const audio = this.$refs.audioEle
      audio.load()

      this.isPlaying = true
      this.play()
    }
  },
  methods:{
    setNewSong(song){
      this.nowSong = song
      this.nowAlbum = this.recomConfig.filter(album => album.handle === song.albumHandle)[0]
    },
    setList(album){
      this.albumListConfig = album
    },
    clickPlayButton(){
      this.isPlaying = !this.isPlaying
      this.play()
    },
    play(){
      const audio = this.$refs.audioEle
      const playPromise = audio.play()
      let songMin = 0
      let songSec = 0
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
          if(this.isPlaying) {
            songMin = Math.floor(audio.duration / 60)
            songSec = Math.floor(audio.duration % 60)
            this.songDuration = `0${songMin}：${songSec}`
            audio.play()
          } else {
            audio.pause()
          }
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
          this.isPlaying = false
          audio.pause()
        })
      }
    },
    NextSong() {
      if(this.isRandom) {
        const albumLength = this.nowAlbum.songs.length
        const randomIndex = Math.floor(Math.random()*albumLength)
        const newSong = this.nowAlbum.songs.filter(song => {
          return this.nowAlbum.songs.indexOf(song) === randomIndex
        })
        this.nowSong = newSong[0]
      }else {
        const oldIndx = this.nowAlbum.songs.indexOf(this.nowSong)
        const newSong = this.nowAlbum.songs.filter(song => {
          if(oldIndx+1 > this.nowAlbum.songs.length){
            return this.nowAlbum.songs[0]
          } else {
            return this.nowAlbum.songs.indexOf(song) === oldIndx+1
          }
        })
        this.nowSong = newSong[0]
      }
    },
    PrevSong() {
      const oldIndx = this.nowAlbum.songs.indexOf(this.nowSong)
      const newSong = this.nowAlbum.songs.filter(song => {
        if(oldIndx-1 < 0){
          return this.nowAlbum.songs[0]
        } else {
          return this.nowAlbum.songs.indexOf(song) === oldIndx-1
        }
      })
      this.nowSong = newSong[0]
    },
    songEnded(){
      if(!this.isRepeat) {
        this.NextSong()
      }
    }
  }
}
</script>

<style lang="sass" scoped>
$width: 414px
$haveNaviHeight: calc(100vh - 100px)
$noNaviHeight: calc(100vh - 50px)

.player
  width: 100%
  height: 100vh
  background-color: #eee
  &__header
    display: flex
    justify-content: space-between
    padding: 14px
    font-size: 15px
    position: fixed
    top: 0
    left: 50%
    transform: translateX(-50%)
    width: calc(100% - 28px)
    max-width: 414px
    background-color: #eee
    z-index: 999999
    .fas
      display: flex
      align-items: center

  &__wrap
    position: relative
    max-width: 414px
    width: 100%
    height: $noNaviHeight
    margin: 0 auto
    overflow-x: hidden
    overflow-y: scroll
    padding-top: 50px

  .have-navi
    height: $haveNaviHeight
    padding-bottom: 50px

.player-page
    background-color: #fff
</style>

