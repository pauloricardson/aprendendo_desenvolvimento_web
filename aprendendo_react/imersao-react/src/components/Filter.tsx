import { Search } from 'lucide-react';

type FilterProps = {
    title: string;
    placeholder?: string;
}

function Filter({ title, placeholder }: FilterProps) {
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[#00A2F7] text-xl">{title}</p>
            <p className="text-xm text-[#00A2F7]" >Conteúdo exclucivo todos os dias</p>

            <div className="flex gap-2 items-center mt-2 cursor-pointer">
                <input type="text" placeholder={placeholder} className="bg-white border border-[#F2F2F2] rounded-md w-[615px] h-[35px] text-xs px-2" />
                <div className='h-[35px] w-[35px] flex justify-center items-center rounded-md bg-[#E1F4FF]'>
                    <Search size={16} className='text-[#00A2F7]' />
                </div>
            </div>
        </div>
    );
}

// parei em 2:16:24 - https://www.youtube.com/watch?v=WnQ6WrffEok&t=6s

export default Filter;