// Product Database
const products = [
    {
        id: 1,
        name: "Wireless Charging Pad",
        price: 29.99,
        category: ["mobile", "charging"],
        image: "images/product-1.jpeg",
        description: "Qi-certified fast wireless charger for all smartphones",
        stock: 50,
        rating: 4.7
    },
    {
        id: 2,
        name: "Premium Laptop Sleeve",
        price: 49.99,
        category: ["laptop", "protection"],
        image: "images/product-2.jpeg",
        description: "Water-resistant neoprene sleeve with shock absorption",
        stock: 30,
        rating: 4.9
    },
    {
        id: 3,
        name: "Noise-Cancelling Headphones",
        price: 129.99,
        category: ["audio", "mobile"],
        image: "images/product-3.jpeg",
        description: "Bluetooth 5.0 with 30-hour battery life",
        stock: 25,
        rating: 4.8
    },
    {
        id: 4,
        name: "USB-C Multiport Adapter",
        price: 39.99,
        category: ["laptop", "charging"],
        image: "images/product-4.png",
        description: "4-in-1 hub with HDMI, USB, and SD card reader",
        stock: 40,
        rating: 4.6
    },
    {
        id: 5,
        name: "Tempered Glass Protector",
        price: 14.99,
        category: ["mobile", "protection"],
        image: "images/product-5.png",
        description: "9H hardness anti-scratch screen protector",
        stock: 100,
        rating: 4.5
    },
    {
        id: 6,
        name: "Ergonomic Laptop Stand",
        price: 59.99,
        category: ["laptop", "accessories"],
        image: "images/product-6.jpeg",
        description: "Adjustable aluminum stand for better posture",
        stock: 20,
        rating: 4.7
    },
    {
        id: 7,
        name: "Portable SSD 1TB",
        price: 99.99,
        category: ["storage", "laptop"],
        image: "images/product-7.jpeg",
        description: "USB 3.2 Gen 2 with 1050MB/s transfer speeds",
        stock: 15,
        rating: 4.9
    },
    {
        id: 8,
        name: "Smartphone Camera Lens Kit",
        price: 34.99,
        category: ["mobile", "accessories"],
        image: "images/product-8.jpeg",
        description: "3-in-1 professional lens set for mobile photography",
        stock: 35,
        rating: 4.4
    },
    {
        id: 9,
        name: "Wireless Vertical Mouse",
        price: 24.99,
        category: ["laptop", "accessories"],
        image: "images/product-9.jpeg",
        description: "Ergonomic design with silent clicks",
        stock: 50,
        rating: 4.6
    },
    {
        id: 10,
        name: "GaN Fast Charger",
        price: 49.99,
        category: ["charging", "mobile", "laptop"],
        image: "images/product-10.jpeg",
        description: "65W compact charger with multiple ports",
        stock: 40,
        rating: 4.8
    }
];

// Product Search and Filter Functions
const productService = (() => {
    const getAllProducts = () => products;
    
    const searchProducts = (query) => {
        const searchTerms = query.toLowerCase().split(' ');
        return products.filter(product => 
            searchTerms.every(term =>
                product.name.toLowerCase().includes(term) ||
                product.category.some(cat => cat.includes(term)) ||
                product.description.toLowerCase().includes(term)
            )
        );
    };

    const filterByCategory = (category) => {
        if(category === 'all') return products;
        return products.filter(product => 
            product.category.includes(category)
        );
    };

    return {
        getAllProducts,
        searchProducts,
        filterByCategory
    };
})();
