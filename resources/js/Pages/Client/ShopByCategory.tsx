import React, {lazy} from 'react';
import AppLayout from "../../layouts/client";
import ProductsFilter from "../../components/client/includes/ProductsFilter";

export default function ShopByCategory() {
  // const ProductsFilter = lazy(() => import("../../components/client/includes/ProductsFilter"));

  return (
    <AppLayout>
      <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <ProductsFilter/>
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  {/*product start*/}
                  <article className="shadow-sm rounded bg-white border border-gray-200">
                    <a href="#" className="block relative p-1">
                      {/*<img src="images/items/10.jpg" className="mx-auto w-auto" height="240" alt="Product title here"/>*/}
                    </a>
                    <div className="p-4 border-t border-t-gray-200">
                      <p className="font-semibold">$99.50</p>
                      <a href="#" className="block text-gray-600 mb-3 hover:text-blue-500">
                        Great name of this product just goes here as demo
                      </a>
                      <div>
                        <a
                          className="px-4 py-2 inline-block text-white text-center bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                          href="#">
                          Add to cart
                        </a>
                        <a
                          className="px-3 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                          href="#">
                          <i className="fa fa-heart"/>
                        </a>
                      </div>
                    </div>
                  </article>
                  {/*product end*/}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </AppLayout>

  );
}
