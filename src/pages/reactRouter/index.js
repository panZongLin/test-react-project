import React from "react";
import {Button} from 'antd';
import { BrowserRouter, HashRouter, Route, Link, Redirect, withRouter  } from "react-router-dom";

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topic = ({ props, match, location, history }) => {
    //console.log("Topic",  props, match, location, history);
    return(
        <div style={{marginTop: 10}}>
            <h3>
                topicId: {match.params.topicId} <br /> topicName: {match.params.topicName}
            </h3>
        </div>
    )
};

class Topics extends React.Component {
    render() {
        const {props, match, location, history} = this.props;  
        //console.log("Topics",  this.props);

        return(
            <div>
                <h2>Topics</h2>
                <ul style={{marginTop: 10}}>
                    <li>
                        <Link to={`${match.url}/someTopicId/topicName`}> 
                            go to --  /match.url + /topicId
                        </Link>
                    </li>
                </ul>
                {
                    /**
                        这里的路由没有加exact，所以当访问/reactRouterHome/topics/someTopicId时，
                        这两者都因匹配/reactRouterHome/topics，而被同时渲染
                    */
                }
                <Route path={`${match.url}/:topicId/:topicName?`} component={Topic} />  

                <Route
                    path={match.path}
                    render={(props)=> { 
                        return (
                            <h3 style={{marginTop: 10}}>
                                用Route render方式匹配到的return
                            </h3>
                        )
                    }}
                />
                <Button style={{marginTop: 10}} onClick={()=> {history.push({pathname: '/'})}}>
                    回到首页
                </Button>
            </div>
        )
    }
}

const BasicExample = (props) => {
    //console.log('BasicExample', props);
    return (
        <HashRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/reactRouter/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/reactRouter/about">About</Link>
                    </li>
                    <li>
                        <Link to="/reactRouter/topics">Topics</Link>
                    </li>
                </ul>
                <hr />
                <Route path="/reactRouter/home" component={Home} />  
                <Route path="/reactRouter/about" component={About} />
                <Route path="/reactRouter/topics" component={Topics} /> 
            </div>
        </HashRouter>
    )
};
export default withRouter(BasicExample);

