import Image from 'next/image';
import Bookmark from '../../../public/images/3-keep-minus.png';
import Dua from '../../../public/images/54-menu-2.png';
import Book from '../../../public/images/books1.png';
import Donate from '../../../public/images/bxs_donate-heart.png';
import QA from '../../../public/images/dua-info1.png';
import logo from '../../../public/images/f49d5cb63d9a02588cddba5d7357d8ab.png';
import Home from '../../../public/images/home1.png';
import Memorize from '../../../public/images/memorize1.png';
import Ruqyah from '../../../public/images/ruqyah1.png';

const Sidebar = () => {
    return (
        <div className="bg-[#FFFFFF] w-[100px] h-[927px] rounded-3xl" >
            <div className='pt-7 pl-2.5 pb-2 '>
                <Image src={logo} alt='logo' width='73' height='73' className='' />
            </div>
            <div className='mt-20 pt-5'>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">
                        <Image src={Home} alt='Home' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">
                        <Image src={Dua} alt='Dua' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">

                        <Image src={Memorize} alt='Memorize' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">

                        <Image src={Bookmark} alt='Bookmark' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">

                        <Image src={Ruqyah} alt='Ruqyah' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">

                        <Image src={QA} alt='QA' width='20' height='20' />
                    </div>
                </div>
                <div className='flex justify-center items-center my-8'>
                    <div className="p-2 bg-[#E8F0F5] rounded-full w-10 flex items-center justify-center">
                        <Image src={Book} alt='Book' width='20' height='20' />
                    </div>
                </div>
            </div>
            <div className="pt-20">
                <div className='bg-[#1FA45B] flex items-center justify-center p-5 w-[57px] m-auto rounded-lg h-[56px]'>
                    <Image src={Donate} alt='Donate' width='60' height='60' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;