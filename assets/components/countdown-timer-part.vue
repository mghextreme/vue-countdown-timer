<template>
	<div class="countdown-timer-part">
		<span class="value">{{number}}</span>
		<span class="background" v-bind:style="styleObject">{{number}}</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['number', 'cycle', 'bgdir'],
		computed: {
			percentage() {
				if (this.cycle == 0)
					return 100;

				return (100 * this.number) / this.cycle;
			},
			styleObject(){
				if (this.bgdir == 'h'){
					return {
						height: this.percentage + '%'
					};
				} else {
					return {
						width: this.percentage + '%'
					};
				}
			}
		}
	}

</script>
