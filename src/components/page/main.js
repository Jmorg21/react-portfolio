import About from "../page/main"
import Project from "../project/project"
import Contact from "../contact/contact"
export default function MainContainer(props){
    
    function currentPage(){
    if (props.page ==='about'){
      return <About />
    }
    if(props.page ==='projects'){
    return  <Project />
    }
    else{
      return <Contact />
    }
  }
  return(
    <div>
      {currentPage()}
    </div>
  )
}