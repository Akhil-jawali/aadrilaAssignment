import productImg0 from './assets/productImg-0.webp'
import productImg1 from './assets/productImg-1.webp'
import productImg2 from './assets/productImg-2.webp'
import ProductListCard from './ProductListCard';
import spaceDots from './assets/spaceDots.svg'

const Products = () => {
    return (
        <div className='md:py-5 py-7'>
            <div className="flex flex-col items-center relative">
                <img src={spaceDots} alt="dots" className="absolute top-[0] left-[30px] z-10 w-[200px] lg:visible invisible" />
                <p className="md:text-2xl text-lg font-bold heroGradient manrope">
                    features and benefits.
                </p>
                <p className="md:mt-3 text-3xl font-semibold md:text-5xl">
                    Our Products
                </p>
            </div>
            <div className="flex flex-col gap-5">
                <ProductListCard img={productImg0} colorBtn="DocSim" title="AI-Powered Document Similarity Engine" index={0} features={['Detects near - duplicates and tampered documents.', 'Identifies fraudulent patterns across large repositories.', 'Multi - language support for global adaptability.']} benefits={['Save 30% time on manual checks', 'Reduce document fraud by up to 40%']} />
                <ProductListCard img={productImg1} colorBtn="DocPilot" title="Streamline Document Workflows with Automation" index={1} features={['Automates document collection, routing, and task assignments.', 'Real - time tracking with advanced dashboards.', 'Seamless integration with enterprise systems via APIs.']} benefits={['Reduce turnaround times by 50%.', 'Improve operational efficiency with minimal manual effort.']} />
                <ProductListCard img={productImg2} colorBtn="Doxtract" title="Extract, Validate, and Process Documents with Ease" index={2} features={['OCR and NLP-based data extraction', 'Handles unstructured documents across industries.', 'Validates fields using external data sources.']} benefits={['Reduces manual data entry errors', 'Improves processing speed and efficiency', 'Enhances compliance and audit trails']} />
            </div>
        </div >
    )
}

export default Products