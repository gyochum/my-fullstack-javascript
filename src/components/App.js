import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
//import axios from 'axios';

class App extends React.Component {
    //class property
    state = {
        pageHeader: "This is the header for the state property pageHeader!!",
        contests: []
    };
    componentDidMount(){
        /*axios.get('/contests')
            .then(response => {
                console.log(response);
            });
            //.catch(console.error);
        this.setState({
            contests: data.contests
        });*/
    }
    componentWillUnmount(){
        console.log('did unmount!');
    }
    render(){
        return (
            <div>
                <Header message={this.state.pageHeader} />
                {
                    this.state.contests.map(contest =>                         
                        <ContestPreview key={contest.id.toString()} {...contest} />
                    )
                }                
            </div>
        );
    }
};

export default App;