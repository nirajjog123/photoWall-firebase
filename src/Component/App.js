import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as action from "../Redux/actions";
// import {withRouter} from "react-router";


function mapStateToProps(state) {   // //binding and update state to our props so that this can be transfered through main.js in other components
    return {
        posts: state.posts,
        comments:state.comments
    }
}

const mapDispatchToProps = (dispatch)=>{   //binding actions to our props
    return bindActionCreators(action,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;