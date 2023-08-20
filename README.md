## Modaje

This is an API for creating and managing ecommerce products. It allows users to create products, add product images, and set prices. It also allows users to list products for sale.

## Features

- **Create and manage products**
  
  - Create new products.
  - Edit existing products.
  - Delete products.
  - indexing products using Meilisearch search engine,
    - performance boost for quick search and filters
      -     by color, store, size, price
  - Create variations for products.
    - Use the **Master Product** pattern to create a tree of **Variations** for each **Product**.
  - Categorize products.
    - Introduce **Unisex Categorize**, which automatically adds the opposite sex category if the item can be a unisex item.
  - Add product images and thumbnails.
    - Resize and optimize images for better performance.
  - Set prices.
    - Make mass price edits.
  - List products for scheduled sale.
    - Offer percentage discounts or fixed discounts.
  - Count unique views.
    - Log a summary at the end of the day.
    - Send a notification to the seller and admins for the total views counted.

## Dependencies

This API requires the following dependencies:

- PHP 8.1 or higher
- Laravel 9.x
- MySQL
- TypeScript
- Tailwind CSS
- ReactJS
- InertiaJS
- Meilisearch
