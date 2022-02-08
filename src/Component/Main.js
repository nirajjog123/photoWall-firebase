import React, { Component } from "react";
import Photowall from "./PhotoWall";
import Title from "./Title";
import AddPhoto from "./AddPhoto";
import Single from "./Single";
import { Link, Route, Routes } from "react-router-dom";
import { removePosts } from "../Redux/actions";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      // screen: "photos", // photos OR addPhotos
    };
    this.onRemovePhoto = this.onRemovePhoto.bind(this);
    this.simulateData = this.simulateData.bind(this);
    // this.onNavigate = this.onNavigate.bind(this);
  }

  onRemovePhoto(photo) {
    // this.setState((preState) => ({
    //   posts: preState.posts.filter((post) => post !== photo),
    // }));
  }

  onAddPhoto(data) {
    console.log("incoming Photo Received" + data);
    this.setState((preState) => ({
      posts: preState.posts.concat(data),
    }));
    // history.pushState('/');
  }

  componentDidMount() {
    // const data = this.simulateData();
    // this.setState({
    //   posts: data,
    // });
    //  console.log(this.state);
    // this.props.removePosts(1);
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(prevState);
  }
  render() {
   //  console.log("Rendered Props" + this.props.posts);
    return (
      <div>
        <h1> 
          <Link to={"/"}>PhotoWall</Link>
        </h1>
        <Routes>
          <Route
            path="/"
            element={[
              // <Title title={"photowall"} />,
              // <Photowall
              //   posts={this.state.posts}
              //   onRemovePhoto={(photo) => this.onRemovePhoto(photo)}
              //     onNavigate= {this.onNavigate}
              // />
              <Photowall {...this.props} />,
            ]}
          ></Route>
          {/* {this.state.screen === "addPhoto" && ( */}
          <Route
            path="/AddPhoto"
            element={<AddPhoto 
              // onAddPhoto={(data) => this.onAddPhoto(data)} 
              {...this.props}
              />}
          ></Route>
          <Route
            path="/Single/:id"
            element={<Single
            {...this.props}/>}>

            </Route>
      </Routes>
      </div>
    );
  }

  simulateData() {
    return [
      {
        id: 0,
        description: "beautiful landscape",
        imageLink:
          "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg",
      },
      {
        id: 1,
        description: "Aliens???",
        imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
      },
      {
        id: 2,
        description: "On a vacation!",
        imageLink:
          "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
      },
    ];
  }
}

export default Main;
