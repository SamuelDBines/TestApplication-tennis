import React, {Component} from 'react';
class App extends Component {
    render() {
        return (
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Samuel Bines</h5>
                        <p class="grey-text text-lighten-4">You can access more information and content I am able to share using the links on the right hand side.  </p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                        <li><a class="grey-text text-lighten-3" href="https://github.com/SamuelDBines">Github</a></li>
                        <li><a class="grey-text text-lighten-3" href="https://uk.linkedin.com/in/sam-bines-a5ab70185">LinkedIn</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                    © 2019 All Written code and content except for images which can be found at
                    <a class="grey-text text-lighten-4 " href="https://pexels.com"> Pexels.com</a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default App;