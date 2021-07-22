<template>
  <div class="term-list">
    <div class="term-box">
      <div class="term">
        <h2>GIF</h2>
        <p class="term-definitions">
          a lossless format for image file that supoported animanted and image
          both file
        </p>
        <div class="term-pronounciation">
          <input type="radio" v-model="selected" name="vote" :value="0" />
          <kendo-button
            icon="volume-up"
            @click="playSound('http://bit.ly/2HHjJio')"
          >
            GIF
          </kendo-button>
          <input type="radio" v-model="selected" name="vote" :value="1" />
          <kendo-button
            icon="volume-up"
            @click="playSound('http://bit.ly/2plmOO2')"
          >
            gif
          </kendo-button>
        </div>
        <div class="term-voting">
          <kendo-button class="k-primary" @click="onVote"> vote</kendo-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "term-list",
  data() {
    return {
      selected: 0,
      pronounciation1Votes: 0,
      pronounciation2Votes: 0,
    };
  },
  methods: {
    playSound(sound) {
      if (sound) {
        let audio = new Audio(sound);
        audio.play(sound);
      }
    },
    onVote() {
      if (this.selected) this.pronounciation2Votes++;
      else this.pronounciation1Votes++;
      console.log(
        "1: %s 2:%s",
        this.pronounciation1Votes,
        this.pronounciation2Vote
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
