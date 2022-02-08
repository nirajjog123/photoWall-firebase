import React, { Component } from 'react';


class AddPhoto extends Component {
    constructor(props){
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        const linkData =e.target.elements.Link.value;
        const descData = e.target.elements.Description.value;
        const dataObject = {
            id: Number(new Date()),
            description:descData,
            imageLink:linkData
        }
        if(linkData && descData){
           // this.props.onAddPhoto(dataObject);
           this.props.addPosts(dataObject);
        }
    }
    render() { 
        return (
            <div>
        <div className='form' onSubmit={this.handleSubmit}>
            <form>
            <input placeholder='Link' name='Link'></input>
            <input placeholder='Description' name='Description'></input>
            <button>post</button>
            </form>
            </div>

        </div>
        );
    }
}
 
export default AddPhoto;