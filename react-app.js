class MetricConverter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			miles: 0,
			km: 0
		}

		this.handleMileChange = this.handleMileChange.bind(this);
		this.handleMetricChange = this.handleMetricChange.bind(this);

	}

	render() {

		return(
			<div>
				Kilometers:<TemperatureInput distance={this.state.km} distanceChange={this.handleMetricChange} />
				Miles:<TemperatureInput distance={this.state.miles} distanceChange={this.handleMileChange} />
			</div>
		)
	}

	handleMetricChange(kmInput) {
		let convertedMiles = parseFloat(kmInput) * 0.621371;
		this.setState({km: kmInput, miles: convertedMiles})
	}

	handleMileChange(mileInput) {
		let convertedKm = parseFloat(mileInput) * 1.60934;
		this.setState({km: convertedKm, miles: mileInput})
	}

}

function TemperatureInput(props) {

	return(
		<div>
			<input value={props.distance} onChange={handleDistanceChange} />
		</div>
	)

	function handleDistanceChange(event) {
		props.distanceChange(event.target.value)
	}

}



ReactDOM.render(
	<MetricConverter />,
	document.getElementById("react")
)
