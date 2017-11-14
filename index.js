import React, { Component, PropTypes } from 'react';
// import ModuleDemo from 'franklyinc/FranklyModulesDemo';
import Dep from './dep';

class ModuleCrossDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    This is a child "ModuleDemo" component:<br/>
	    <Dep></Dep>
	    {/* <ModuleDemo text="test"></ModuleDemo> --> */ }
      </div>
    );
	  
  }
}

export default ModuleCrossDemo;
