import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import useScrollPosition from "../hook/useScrollPosition";
import Navbar from "./navbar/Navbar";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    const {scrollPosition} = useScrollPosition()
    const classTop = `to-top ${scrollPosition > 100 ? 'appear' : ''}`
    return (
        <>
            <Meta/>
            <div className={'layout'}>
                <Alert preview={preview}/>
                <Navbar/>
                <main>{children}</main>
            </div>
            <Footer/>
            <a href="#top" className={classTop}><img src="/images/to-top.svg" alt="back-to-top"/></a>
        </>
    )
}

export default Layout
