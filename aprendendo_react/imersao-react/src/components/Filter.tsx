import { Search } from 'lucide-react';

function Filter() {
    return (
        <div className="flex flex-col items-center mt-10">
            <p className="font-bold text-[#00A2F7] text-xl">Busque o conteúdo que deseja assitir hoje</p>
            <p className="text-xm text-[#00A2F7]" >Conteúdo exclusivo todos os dias</p>

            <div className="flex items-center">
                <input type="text" className="bg-white border border-[#F2F2F2] rounded-md w-[615px] h-[35px] mt-3"/>
                <div>
                    <Search size={16}/>
                </div>
            </div>
        </div>
    );
}

export default Filter;