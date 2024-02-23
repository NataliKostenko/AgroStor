
import Novelties from './novelties/novelties.js'
import './index.css'
import Section1 from './Section1/section1.js'
import About from './about/about.js'
import Promotions from './promotions/promotions.js'
import Partners from './partners/partners.js'
import Info from './info/info.js'
// import Footer from './footer/footer.js'

export default function Home() {
	return <>
		<Section1 />
		<div className='backgroundMain'>
			<About />
			<Novelties />
			<Promotions />
			<Partners />
			<Info />
			{/* <Footer /> */}
		</div>
	</>
}
