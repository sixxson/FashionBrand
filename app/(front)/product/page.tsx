
import Productitem from "@/components/products/ProductItem";
import productServices from "@/lib/services/productService";
import { converDocToObj } from "@/lib/utils";

export default async function Prodcut() {
    const latesProducts = await productServices.getLatest()
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="divider"><h2 className="text-2xl py-2">Products</h2></div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {latesProducts.map((product) => (
                    <Productitem key={product.slug} product={converDocToObj(product)} />
                ))}
            </div>
        </>
    )
}

