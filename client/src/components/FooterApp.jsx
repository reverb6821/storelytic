
import { Footer } from 'flowbite-react'

const FooterApp =()=>{
    return(

<Footer container={true}>
  <div className="w-full text-center">
    
    <Footer.Copyright
      href="#"
      by="Storelytic™"
      year={2022}
    />
  </div>
</Footer>
    )
}
export default FooterApp