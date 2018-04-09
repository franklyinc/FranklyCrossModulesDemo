import React, { Component, PropTypes } from 'react';
// import ModuleDemo from 'franklyinc/FranklyModulesDemo';
// import Dep from './dep';
// import folderTest from './depFolder/folderTest';



class ModuleCrossDemo extends Component {

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
	    This is a child "ModuleDemo" component:<br/>
	    {/* <<Dep></Dep> */ }
	    {/* <<folderTest></folderTest> */ }
	    {/* <ModuleDemo text="test"></ModuleDemo> */ }
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
