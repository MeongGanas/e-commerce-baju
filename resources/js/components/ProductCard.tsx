export default function ProductCard() {
    return (
        <div className='space-y-2'>
            <img src="/images/placeholder.png" alt="home" className='w-full' />
            <div className=''>
                <div className="-space-y-1">
                    <p>Luaran</p>
                    <h1 className='font-bold text-xl uppercase'>masculin coat</h1>
                </div>
                <div className="flex items-center justify-between">
                    <div className='flex items-center gap-1'>
                        <div className='bg-black w-4 h-4'></div>
                        <div className='bg-slate-500 w-4 h-4'></div>
                    </div>
                    <h1 className='font-bold text-xl uppercase'>$99</h1>
                </div>
            </div>
        </div>
    )
}