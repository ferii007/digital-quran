import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actions/index'

import dataDoaHarian from '../../assets/data/doa-harian.json'
import heptagonImg from './../../assets/image/heptagon.svg'
import WaitAnimationComponent from "../helper/WaitAnimationComponent"

const DoaComponent = () => {
    const dispatch = useDispatch();
	const { readDoa } = bindActionCreators(actionCreators, dispatch);
    const isWaitAnimation = useSelector((state) => state.waitAnimation);

    const readDetailDoa = (doaName) => {
        const dataDoa = dataDoaHarian.find((doa) => doa.doa === doaName);
        readDoa({
            open: true,
            data: dataDoa
        })

        console.log('dataDoa', dataDoa)
    }

    return(
        <>
            {isWaitAnimation &&  <WaitAnimationComponent />}
            {
                dataDoaHarian.map((data, index) => (
                    <div key={index} className="card relative" onClick={() => readDetailDoa(data.doa)}>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-4'>
                                <div className='relative flex justify-center'>
                                    <img src={heptagonImg} alt='ayat' className='w-12 h-12' />
                                    <span className='absolute top-3 text-lg font-bold'>{index + 1}</span>
                                </div>

                                <h2 className='text-lg font-bold text-defaultFontColor'>{data.doa}</h2>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default DoaComponent