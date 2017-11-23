import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const defaultValue = '';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {marks: [<Mark />]};

		this.addMark = this.addMark.bind(this);
	}

	render() {
		return (
			<div>
				<div id="marks">
					{this.state.marks}
				</div>
				<button onClick={this.addMark}>Add Mark</button>
			</div>
		);
	}

	addMark() {
		console.log(this.state.marks);
		this.setState(this.state.marks.concat([
			{marks: <Mark />}
		]));
	}
}

class Mark extends Component {
	static lastId = 0;

	constructor(props) {
		super(props);
		this.state = {id: Mark.lastId++,value: defaultValue, rating: 100};

		this.validateValue = this.validateValue.bind(this);
		this.validateRating = this.validateRating.bind(this);
	}

	validateValue(event) {
		this.setBorder(event.target, '#000');
		if (event.target.value >= 0 && event.target.value <= 6) {
			this.setState({value: event.target.value});
		}
		else {
			this.setBorder(event.target, 'red');
		}
	}

	validateRating(event) {
		this.setBorder(event.target, '#000');
		if (event.target.value >= 1 && event.target.value <= 100) {
			this.setState({rating: event.target.rating});
		}
		else {
			this.setBorder(event.target, 'red');
		}
	}

	setBorder(elem, color) {
		elem.style.borderColor = color;
	}

	render() {
		return (
			<div class="mark" key="{this.state.id}">
				<input type="text" class="value" placeholder="Note" value={this.state.value}
					   onChange={this.validateValue}/>
				<input type="text" class="rating" placeholder="Wertung" value={this.state.rating}
					   onChange={this.validateRating}/>%
			</div>
		);
	}
}

export default App;
