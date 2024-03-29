import React, { Component } from 'react'
// import ModuleDemo from 'franklyinc/FranklyModulesDemo';
// import Dep from './dep';
// import folderTest from './depFolder/folderTest';



class ModuleCrossDemoOrig extends Component {

	
  render(){
	  
    return (
      <div className='FranklyModulesCrossDemo'>
	    {/* This is a child "ModuleDemo" component:<br/>*/ }
	    {/* <<Dep></Dep> */ }
	    {/* <<folderTest></folderTest> */ }
	    {/* <ModuleDemo text="test"></ModuleDemo> */ }
	    <pre>{this.props.text}</pre>
	    <pre>{JSON.stringify(this.state)}</pre>

      </div>
    );
	  
  }
}



class ModuleCrossDemo extends Component {
  constructor (props) { // gives us acces to props, fires long before page load
    super(props) // assigns props to this.props



    this.imgUrl = 'http://ftpcontent.worldnow.com/kotv/test/don/build/';
    this.state = {
      stories: []
    } /* great place to assign default state */;
    this.stories = props.FRN_rawResponses;

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
    console.log("*** this.props.origin: ", this.props.origin);
    if(typeof window === 'object'){
//       this.ajax(this.props.origin+ 'http://www.newson6.com/category/331247/school-shutdown-feed?clienttype=container.json', (res)=>{
//        this.ajax('http://www.newson6.com/category/331247/school-shutdown-feed?clienttype=container.json', (res)=>{
      this.ajax(this.props.origin+ '?clienttype=container.json', (res)=>{
        res = JSON.parse(res)
        console.log(res)
        this.setState({stories: res.features})
      })
    }


  }
  componentDidMount () {

   }

  componentWillReceiveProps (nextProps) {

   }
  shouldComponentUpdate (nextProps, nextState) { /* OPTIONAL, allows us to intelligently decide if we really need to re-render (BOOL) */
    return true
  }
  componentWillUpdate (nextProps, nextState) { /* OPTIONAL (and cannot call setState in here) last opportunity to massage data before render */ }
  componentDidUpdate (prevProps, prevState) { /* OPTIONAL Here we have access to the DOM again, */ }

  componentWillUnmount () { /* GREAT place to kill any network requests, or any Timeout or Interval functions trying up resources. Last stop before we are destroyed.  */ }

  render () { // REQUIRED
    return (<div className='gnm-home-page-takeover'>
      <div className='row overlaid-contents'>
        <div className='col-sm-7 col-md-8 col-xs-12 left-column'>
          <h1 className='main-title'>{this.props.title}</h1>
        </div>
        <div className=' col-sm-5 col-md-4 right-column hidden-xs '>
          <div className='dark-opacity fill-all'>
            <div className='right-column-contents'>
              <div className='row'>
                <div className='col-xs-12'>
                  <a href='#' className='watch-live'>
                    <span className='watch-live-text'>Watch Live</span>
                    <span className='glyphicon glyphicon-play-circle' />
                  </a>
                </div>
              </div>
              {
                this.state.stories.slice(0,1).map(function(s,i,a){ //in case the array is empty
                  return(
                    <div className='row secondary-story' key={i}>
                      <div className='col-xs-12'>
                        <a href={s.link}>
                          <img className='img-responsive' src={s.abstractimage.filename } />
                        </a>
                      </div>
                      <div className='col-xs-12 secondary-title-container'>
                        <a href={s.link} className='secondary-title'>
                          <span >{s.headline.replace(/<\/?[^>]+(>|$)/g, "")}</span>
                        </a>
                      </div>
                      <div className='col-sm-12 hidden-sm secondary-subtitle'>
                        <span>{s.abstract.replace(/<\/?[^>]+(>|$)/g, "") }</span>
                      </div>
                    </div>
                  )
                })
              }


              {
                this.state.stories.slice(1,4).map(function(s,i,a){
                  return(
                    <div key={i}>
                      <div className='divider visible-sm-block' />
                      <div className='row related-story '>
                        <div className='col-xs-5 hidden-sm related-stories-photo-col'>
                          <a href={s.link}>
                            <img className='img-responsive' src={s.abstractimage.filename} />
                          </a>
                        </div>
                        <div className='col-sm-12 col-md-7 related-stories-text-col'>
                          <div className='row'>
                            <div className='col-xs-12'>
                              <a href={s.link} className='related-stories-title'>{s.headline.replace(/<\/?[^>]+(>|$)/g, "")}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className='view-more'>
              <div className='row'>
                <div className='col-xs-12'>
                  <a href={this.props.origin} >
                    <span >More Stories</span>
                    <span className='glyphicon glyphicon-chevron-right' />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='main-image-container'>
        <img className='main-image' src={this.props.photoUrl } />
      </div>
      <div className='row visible-xs-block dark-opacity xs-bottom-bar related-stories small'>

        <div className='col-xs-12'>
          <a href='#' className='watch-live'>
            <span className='watch-live-text'>Watch Live</span>
            <span className='glyphicon glyphicon-play-circle' />
          </a>
        </div>
        {
          this.state.stories.slice(0,3).map(function(s,i,a){
            return(
              <div key={i} className='col-xs-12 bottom-border'>
                <a href={s.link}>{s.headline.replace(/<\/?[^>]+(>|$)/g, "")}</a>
              </div>
            )
          })
        }
        <div className='view-more small'>
          <a href='#' className='bottom-border'>
            <span >View More</span>
            <span className='glyphicon glyphicon-chevron-right' />
          </a>
        </div>

      </div>
    </div>)
  }
}

// export default HomePageTakeover
export default ModuleCrossDemo
