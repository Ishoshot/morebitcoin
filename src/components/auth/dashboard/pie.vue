<!-------------- Chart to display Transaction Statistics -------------->

<script>
import { Pie } from "vue-chartjs";

export default {
	props: {
		chartInfo: Object,
	},
	extends: Pie,
	data() {
		return {
			chartData: {
				labels: this.chartInfo.pieChart.status, //Statuses
				datasets: [
					{
						data: this.chartInfo.pieChart.number, //Records count
						backgroundColor: [
							"rgb(22, 129, 211)",
							"rgb(255, 0, 0)",
							"rgb(49, 199, 106)",
							"rgb(251, 198, 88)",
						],
						hoverOffset: 4,
					},
				],
			},
			options: {
				legend: {
					display: true,
				},
				responsive: true,
				maintainAspectRatio: false,
			},
		};
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	},
};
</script>
