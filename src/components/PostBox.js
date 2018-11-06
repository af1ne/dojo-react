import React, { Component} from 'react';
import axios from 'axios';
import Post from './Post';
import AddPost from './AddPost';

//le componentDidMount est une méthode de la class
//ce n'est donc pas un composent bête

class PostBox extends Component {

    // Dès que tu mets await tu es obligé de mettre un async (où l'inverse)!!!
    //La méthode async/ await est plus utilisé que .then
        getData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.props.handlePostsFetched(response.data)
        }

        componentDidMount() {
            this.getData()
        }


    // componentDidMount() {
    //     // axios.get('https://jsonplaceholder.typicode.com/posts')
    //         // .then (response => this.props.handlePostsFetched(response.data))   
    //  }

    // async componentDidMount() {
    //     const response = this.props.handlePostsFetched((await axios.get('https://jsonplaceholder.typicode.com/posts')).data)
    // }

    render() {
        // // if (!this.props.posts.length) {
        // //     return <p>En cours de chargement...</p>
        // // }

        // return ( 
            
        //     <ul>
        //         {this.props.posts.map(post => 
        //         <li key={post.id}>
        //          <Post {...post}/>
        //         </li>
        //         )}
        //     </ul>
        // )

        return (
            <div>
                <AddPost getData={this.getData} />
                {(!this.props.posts.length) ? <p>En cours de chargement...</p> :
                    (<ul>
                        {this.props.posts.map(post => 
                        <li key={post.id}>
                            <Post {...post}/>
                        </li>
                        )}
                    </ul>)}
            </div>
        )
    }
}

export default PostBox;