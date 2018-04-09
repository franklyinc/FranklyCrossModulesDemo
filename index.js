import React, { Component, PropTypes } from 'react';
// import ModuleDemo from 'franklyinc/FranklyModulesDemo';
// import Dep from './dep';
// import folderTest from './depFolder/folderTest';

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

class ModuleCrossDemo extends Component {

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
