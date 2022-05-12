<!-------------- Chart to display user's Monthly Transactions -------------->

<script>
import { Line } from "vue-chartjs";

export default {
	props: {
		chartInfo: Object,
	},
	extends: Line,
	data() {
		return {
			chartData: {
				labels: this.chartInfo.lineChart.months, //Months
				datasets: [
					{
						label: "Transactions",
						data: this.chartInfo.lineChart.amounts, //Total Amount for a Month
						fill: true,
						borderColor: "#2554FF",
						backgroundColor: "rgb(237,241,250)",
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
							gridLines: {
								display: true,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
				},
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
