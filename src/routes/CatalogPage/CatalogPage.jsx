
import { HeaderCatalog } from "./components/HeaderCatalog";
import { CatalogMain } from "./pages/CatalogMain/CatalogMain";


const CatalogPage = () => {
    
    return (
        <main className="catalog">
            <HeaderCatalog />
            <CatalogMain />
        </main>
    );
};

export { CatalogPage };