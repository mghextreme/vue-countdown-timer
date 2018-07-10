import $ from 'jquery';

import Vue from 'vue';
import countdownTimer from '~/components/countdown-timer';

$(function(){
	var site = new Vue({
		el: '#main',
		components: {
			countdownTimer
		}
	});
});