import React from "react";

class Students extends React.Component {
	render() {
		const {data} = this.props;
		console.log(data);
		return (
			<h1>{data.id}. {data.name}</h1>
		)
	}
}

export default Students;