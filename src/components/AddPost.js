import React, {Component} from 'react';
import axios from 'axios';

class AddPost extends Component {

    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const title = formData.get("title");
        const body = formData.get("body");
        //console.log(title, body)  
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title,
            body
        })
        .then (this.props.getData)
    }




    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input name="title" id="title" type="text"></input>
                
                <label htmlFor="body">Body</label>
                <input name="body" id="body" type="text" ></input>
                
                <input type="submit" value="Valider"/>
            </form>
        )
    }
}

export default AddPost;