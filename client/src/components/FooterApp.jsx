
import { Footer } from 'flowbite-react'

const FooterApp =()=>{
    return(

<Footer container={true}>
  <div className="w-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        alt="Storelytic Logo"
        name="Storelytic"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="#">
          Licensing
        </Footer.Link>
        <Footer.Link href="#">
          Contact
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
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