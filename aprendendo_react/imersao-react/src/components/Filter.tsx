import { Search } from 'lucide-react';

function Filter(props:{title: string}) {
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[#00A2F7] text-xl">{props.title}</p>
            <p className="text-xm text-[#00A2F7]" >Conteúdo exclusivo todos os dias</p>

            <h2>{props.title}</h2>

            <div className="flex gap-2 items-center mt-2">
                <input type="text" placeholder='Curso de React' className="bg-white border border-[#F2F2F2] rounded-md w-[615px] h-[35px] text-xs px-2"/>
                <div className='h-[35px] w-[35px] flex justify-center items-center rounded-md bg-[#E1F4FF]'>
                    <Search size={16} className='text-[#00A2F7]'/>
                </div>
            </div>
        </div>
    );
}

export default Filter;