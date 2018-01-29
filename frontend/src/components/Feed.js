import React, { Component } from 'react';

class Feed extends Component {

	constructor () {
		super();
    this.state = {
      feed : [
      	'id': 0,
      	'status_text': null,
      	'user_profile': null,
      	'created_on': null
      ]
    };
  }
	componentDidMount() {
		const token = '0df11152c1122fbc81467dc9402b8bf8af4a2fac';
		const headers = {
			'Authorization': `Token ${token}`,
			'Content-Type': 'application/json'
		}
		fetch('http://localhost:8080/api/feed/', {
				method: 'GET', // or 'PUT'
				headers: headers
			}).then(res => res.json())
			.catch(error => console.error('Error:', error))
			.then(response => {
				this.setState({feed:response})
				console.log(this.state.feed)
			});
	}
	render() {
		return (
			<div className = "Feed">
				<h2> Feed </h2>
				{
					this.state.feed.map((item,index)=> {
						return (
							<li key={index}>
								<a href={`/profile/${item.user_profile}`}>{item.status_text}</a>
								<br/>{item.created_on}
							</li>
					)})
				}
			</div>
		);
	}
}

export default Feed;