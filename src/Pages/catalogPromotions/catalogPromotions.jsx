import '../catalogSeeds/catalogSeeds.css'
import '../PlantsProtectingToolsPageCatalog.css';
import PanelFilter from '../../filter/panelFilters';
import ProductPanel from '../../productPanel/productPanel';
import H1 from '../../H1/h1';

export default function CatalogPromotions() {

	return <div className='catalogPage'>
		<H1 text={'Акції'} />
		<div className='pageCatalog'>
			<div className='sideBarCatalog'>
				<PanelFilter />
			</div>
			<ProductPanel url={"../../Data/productPanel.json"} />
		</div>
	</div>
}