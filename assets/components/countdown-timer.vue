<template>
	<div class="countdown-timer">
		<countdown-timer-part v-bind:number="weeks" cycle="52"></countdown-timer-part>
		<countdown-timer-part v-bind:number="days" cycle="7"></countdown-timer-part>
		<countdown-timer-part v-bind:number="hours" cycle="24"></countdown-timer-part>
		<countdown-timer-part v-bind:number="minutes" cycle="60"></countdown-timer-part>
		<countdown-timer-part v-bind:number="seconds" cycle="60"></countdown-timer-part>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery';
	import countdownTimerPart from '~/components/countdown-timer-part';
	
	export default {
		props: ['target'],
		data(){
			return {
				tickInterval: null,
				totalSeconds: 0,
				seconds: 0,
				minutes: 0,
				hours: 0,
				days: 0,
				weeks: 0
			};
		},
		methods: {
			tick(){
				this.totalSeconds--;
				this.updateUnits();
			},
			updateUnits(){
				this.seconds = this.totalSeconds % 60;
				this.minutes = Math.floor(this.totalSeconds / 60) % 60;
				this.hours = Math.floor(this.totalSeconds / 3600) % 24;
				this.days = Math.floor(this.totalSeconds / 86400) % 7;
				this.weeks = Math.floor(this.totalSeconds / 604800) % 52;
			}
		},
		mounted(){
			var now = new Date(),
				targettime = new Date(this.target),
				difference;
			
			if (now >= targettime)
				return;
			
			difference = targettime - now;
			
			this.totalSeconds = Math.floor(difference / 1000);
			this.updateUnits();
			
			this.tickInterval = setInterval(this.tick, 1000);
		},
		components: {
			countdownTimerPart
		}
	}
</script>