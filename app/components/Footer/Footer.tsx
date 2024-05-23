import Link from "next/link";
import Image from "next/image";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        link: ['Home', 'Popular', 'About', 'Contact'],
    },
    {
        id: 2,
        link: ['Help', 'Resources', 'Application', 'Team']
    }
]

const footer = () => {
    return (
        <div className=" -mt-20">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-5'>
                        <img src={'/assets/footer/logo.svg'} alt="logo" className='pb-0' />
                       
                        <div className="flex gap-2">
                            <Image src={'/assets/footer/mask.svg'} alt="mask-icon" width={10} height={10} />
                            <h5 className=" text-sm first-line:font-normal text-black">925 Filbert Street Pennsylvania 18072</h5>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Image src={'/assets/footer/telephone.svg'} alt="telephone-icon" width={10} height={10} />
                            <h5 className=" text-sm font-normal text-black">+ 45 34 11 44 11</h5>
                        </div>
                        <div className="flex gap-2 mt-6">
                            <Image src={'/assets/footer/email.svg'} alt="email-icon" width={10} height={10} />
                            <h5 className="text-sm font-normal text-black">info@gmail.com</h5>
                      
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <Link href="/" className="text-black text-sm font-normal mb-6 space-links">{link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* CLOUMN-4 */}

                    <div className='text-black col-span-4 md:col-span-4 lg:col-span-4'>
                
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-10 lg:flex items-center justify-between border-t border-t-bordertop'>
                    <h4 className='text-black text-sm text-center lg:text-start font-small'>@2023 Agency. All Rights Reserved by <Link href="https://adminmart.com/" target="_blank"> Adminmart.com</Link></h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-black text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-bordertop w-0.5"></div>
                        <h4 className='text-black text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default footer;
