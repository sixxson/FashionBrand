import bcrypt from 'bcryptjs'

const data = {

    users: [
        {
            name: 'john',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'jane',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt1',
            category: 'Shirt',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: ' A popular shirt',
            isFeatured: true,
            banner: '/images/banner1.jpg',
        },
        {
            name: 'Free Shirt2',
            slug: 'free-shirt2',
            category: 'Shirt',
            image: '/images/shirt2.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: ' A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
        {
            name: 'Free Shirt3',
            slug: 'free-shirt3',
            category: 'Shirt',
            image: '/images/shirt3.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: ' A popular shirt',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
        {
            name: 'Jordan Essentials',
            slug: 'jordan-essentials',
            category: 'Shirt',
            image: '/images/shirt3.jpg',
            price: 90,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: ' When the moment calls for a button-down top, hit em with some heritage Jordan style. Made from a lightweight woven twill fabric we brushed lightly for added softness, this top trades buttons for press studs and features an all-over wash for a slightly weathered look.',
            isFeatured: true,
            banner: '/images/banner2.jpg',
        },
    ],
}

export default data