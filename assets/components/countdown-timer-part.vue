<template>
	<div v-bind:id="name" class="countdown-timer-part">
		<span class="value">{{number}}</span>
		<span class="background" v-bind:style="styleObject">{{number}}</span>
		<span class="name">{{name}}</span>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['name', 'number', 'cycle', 'bgdir'],
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
