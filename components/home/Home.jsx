import React, {useState} from 'react'
import {Bundle} from "../index";
import {useRouter} from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";

function Home() {

    const nb_rating = 25431
    const [bundle, setBundle] = useState({1: true, 2: false, 3: false})
    const router = useRouter()


    const buy = (props) => {
        router.push('/checkout')
        toast.success("Achat effectué");
    }

    const addToCart = (props) => {

    }

    return (
        <span className='w-full h-full flex flex-col lg:flex-row bg-white lg:gap-4 lg:px-8'>
            <span className='w-full h-full flex lg:justify-center lg:items-center'>
                <Image className='relative w-full h-full object-cover rounded-sm lg:h-3/4 lg:w-3/4' width={500} height={500} quality={100} onClick={() => localStorage.setItem("items", null)} alt='product' src={'https://cdn.shopify.com/s/files/1/0609/1531/8959/products/BLEAME1018.jpg?v=1653807750&width=713&q=100'}/>
            </span>
            <span className='flex w-full justify-center lg:basis-2/3'>
                <span className='w-full flex flex-col justify-center items-start box-border p-6 gap-3 max-w-screen-sm'>
                <span className='flex justify-between items-center w-full box-border pr-6'>
                    <span className='text-3xl font-semibold text-black'>Product Name</span>
                    <span className='font-bold text-3xl'>39€</span>
                </span>
                <span className='flex items-center gap-4'>
                    <span className='flex gap-0.5 items-center'>
                        <div className='text-violet-500'>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className='text-violet-500'>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className='text-violet-500'>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className='text-violet-500'>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <div className='text-violet-500'>
                            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.201432 8.35425C0.0324796 8.23123 -0.0397528 8.01452 0.021606 7.81473L0.101529 7.56496C0.159961 7.36756 0.335635 7.22781 0.541103 7.21527L6.92493 6.70573L9.37256 0.821007C9.45466 0.614853 9.66074 0.485543 9.88206 0.501294H10.1418C10.3505 0.496866 10.539 0.62523 10.6114 0.821007L13.069 6.70573L19.4528 7.21527C19.6583 7.22781 19.8339 7.36756 19.8924 7.56496L19.9723 7.81473C20.0403 8.00821 19.9805 8.22355 19.8224 8.35425L15.0071 12.4905L16.4857 18.695C16.5344 18.8936 16.4596 19.1021 16.2959 19.2245L16.0061 19.3843C15.8371 19.4986 15.6157 19.4986 15.4467 19.3843L10.0119 16.0873L4.54723 19.4143C4.37823 19.5286 4.15676 19.5286 3.98777 19.4143L3.76798 19.2645C3.60419 19.142 3.52945 18.9335 3.57816 18.7349L5.01677 12.4905L0.201432 8.35425Z" fill="CurrentColor"></path>
                            </svg>
                        </div>
                        <span className='text-violet-500 font-bold px-3 border-r'>4.8</span>
                    </span>
                    {`${nb_rating.toLocaleString()} reviews`}

                </span>
                <span className='text-xl'>If you’re tired of razor cuts, painful waxing or expensive lasers — our hair eraser is for you!</span>
                <span className='flex w-full flex-col gap-8'>
                    <span className='flex flex-col gap-4 w-full items-center'>
                        <Bundle i={1} bundle={bundle} uno={true} dos={false} tres={false} setBundle={setBundle} name={"Single"} save={8} price={39} initialPrice={47}/>
                        <Bundle i={2} bundle={bundle} uno={false} dos={true} tres={false} setBundle={setBundle} name={"Duo"} save={20} price={59} initialPrice={79}/>
                        <Bundle i={3} bundle={bundle} uno={false} dos={false} tres={true} setBundle={setBundle} name={"Trio"} save={40} price={79} initialPrice={119}/>
                    </span>
                    <span className='flex w-full flex-col gap-4'>
                        <button className='cursor-pointer w-11/12 self-center bg-violet-500 rounded-lg box-border py-4 px-2 flex justify-center items-center text-white font-bold text-xl shadow-sm' onClick={() => addToCart({name: "Product Name", bundle: "Solo"})}>🛒 Ajouter au panier</button>
                        <button className='cursor-pointer w-11/12 self-center bg-violet-500 rounded-lg box-border py-4 px-2 flex justify-center items-center text-white font-bold text-xl shadow-sm' onClick={() => buy()}>👉🏻 Acheter maintenant</button>
                    </span>

                </span>
                </span>
            </span>
        </span>
  )
}

export default Home