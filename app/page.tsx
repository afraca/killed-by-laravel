import { Metadata } from 'next';
import slugify from 'slugify';

// Data
import graveyard from '../graveyard.json';

// Components
import Header from '../components/Header';
import App from '../components/App';
import Footer from '../components/Footer';
import { ProductWithSlug, ProductType } from '../types/Product';

export const metadata: Metadata = {
    title: 'Laravel Graveyard - Killed by Laravel',
    description: 'Killed by Laravel is the Laravel Graveyard. A full list of dead products killed by Laravel in the Laravel Cemetery.',
    keywords: ['Laravel', 'graveyard', 'killed', 'products', 'services'],
    authors: [{ name: 'Cody Ogden' }, { name: 'Sije Harkema' }],
    creator: 'Cody Ogden',
    publisher: 'Sije Harkema',
    metadataBase: new URL('https://killed-by-laravel.harkema.dev'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Killed by Laravel',
        description: 'Killed by Laravel is the open source list of dead Laravel products, services, and devices. It serves as a tribute and memorial of beloved services and products killed by Laravel.',
        url: 'https://killed-by-laravel.harkema.dev',
        siteName: 'Killed by Laravel',
        images: [
            {
                url: '/social/card.png',
                width: 1200,
                height: 630,
                alt: 'Killed by Laravel',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    other: {
        'theme-color': '#FAFAFA',
    },
};

async function getProcessedItems(): Promise<ProductWithSlug[]> {
    slugify.extend({
        '+': '-plus',
        '@': '-at',
    });

    const processed = graveyard.map((item) => ({
        ...item,
        type: item.type as ProductType,
        slug: slugify(item.name, {
            lower: true,
        })
    })).sort((a, b) => (new Date(b.dateClose)).getTime() - (new Date(a.dateClose)).getTime());

    return processed;
}

export default async function HomePage() {
    const items = await getProcessedItems();

    return (
        <>
            <Header />
            <App items={items} />
            <Footer />
        </>
    );
} 