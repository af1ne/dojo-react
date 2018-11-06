import React, { Component } from 'react';
import './App.css';
import PostBox from './components/PostBox';

/* 

- Créer les composants `PostBox` et `Post` 
- Le composant `PostBox` permettra de récupérer les articles 
  sur https://jsonplaceholder.typicode.com/posts via Axios 
- Une fois tous les articles récupérés, les afficher via le composant `Post` en passant 
  les informations (title & body) en props  
 </div>
Bonus : </div>
- Créer un composant `AddPost` </div>qui contient deux champs input et qui les enverra en POST sur https://jsonplaceholder.typicode.com/posts
</div>
</div>
*/

class App extends Component {

  state = {
    posts: []
  }


  setPosts = (posts) => {
    // this.setState({posts:posts}) est égal à :
    this.setState({posts})
  }

  render() {

    console.log(this.state)
    
    return (
      <div className="App">
        <PostBox handlePostsFetched={this.setPosts}  posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
