import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function Home() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout>
            <img src="/images/home.png" alt="home" className='w-full' />

            <div className='max-w-[1440px] mx-auto'>
                <div className="grid grid-cols-4 gap-5 py-28">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                <div className='grid grid-cols-2 gap-5 py-28'>
                    <div className='space-y-10'>
                        <h1 className='font-bold text-5xl uppercase'>ideas for pool party stylish fun</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus facere quos esse laudantium dignissimos debitis atque tempore ullam quam?</p>
                        <Button className='rounded-full uppercase'>view all collections <ArrowRight /></Button>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 py-28">
                    <Link href=''>
                        <img src="/images/placeholder.png" alt="home" className='w-full' />
                    </Link>
                    <div className="grid grid-cols-2 gap-5">
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                        <Link href=''>
                            <img src="/images/placeholder.png" alt="home" className='w-full' />
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
