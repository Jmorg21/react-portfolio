import About from "../about/about"
import Project from "../project/project"
import Contact from "../contact/contact"
import Resume from "../Resume/resume"

export default function MainContainer(props){
    
    function currentPage(){
    if (props.page ==='about'){
      return <About />
    }
    if(props.page ==='projects'){
    return  <Project />
    }
    if(props.page ==='resume'){
      return  <Resume />
    }
    else{
      if(props.page ==='contact'){
        return  <Contact />
      }
      else{
      return <Project />
      }
    }
  }
  return(
    <div>
      {currentPage()}
    </div>
  )
}