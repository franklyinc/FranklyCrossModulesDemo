import React, { Component, PropTypes } from 'react';
// import ModuleDemo from 'franklyinc/FranklyModulesDemo';
// import Dep from './dep';
// import folderTest from './depFolder/folderTest';



class ModuleCrossDemo extends Component {
  constructor (props) { // gives us acces to props, fires long before page load
    super(props) // assigns props to this.props
//     this.imgUrl = 'http://ftpcontent.worldnow.com/kotv/test/don/build/';
    this.state = {
      stories: []
    } /* great place to assign default state */;
//     this.stories = props.FRN_rawResponses;

  }
	
  ajax = (url,callback) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
        if (req.status === 200) {
            callback(req.response);
        } else {
            new Error(req.statusText);
        }
    };
    req.onerror = function() {
        new Error('Network error');
    };
    req.send();
  }
	
  componentWillMount () {
    if(typeof window === 'object'){
      this.ajax('http://www.newson6.com/category/331247/school-shutdown-feed?clienttype=container.json', (res)=>{
        res = JSON.parse(res)
        console.log(res)
        this.setState({stories: res.features})
      })
    }


  }
	
	
  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    {/* This is a child "ModuleDemo" component:<br/>*/ }
	    {/* <<Dep></Dep> */ }
	    {/* <<folderTest></folderTest> */ }
	    {/* <ModuleDemo text="test"></ModuleDemo> */ }
	    <pre>{this.state}</pre>
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
