import { useFetchInfoCoin } from '../hooks/useFetchInfoCoin';
import { Aside, Breadcrumb, Footer, Section } from '../components/InfoCoin';
import { Loader } from '../components/Loader';
import { useCoinsStore } from '../hooks';


export const InfoCoinPage = () => {

    const { info, isLoading } = useFetchInfoCoin();
    const { isMode } = useCoinsStore();

  return (

    <>
        {
            ( isLoading ) ? 
                <Loader />
            : 

            <div className='p-4 ' style={ isMode ? {background: '#0d1117' } : {background: '#cccccc' }}>
                <div className={`container-fluid rounded-3 ${(isMode ? 'bg-dark' : 'bg-light')}`}>
                    <div className='row'>
                        <Breadcrumb info={info}/>
                        <Section info={info}/>
                        <Aside info={info}/>
                        <Footer info={info}/>
                    </div>
                </div>
            </div>
            
        }
        
        
    </>
    
  )
}
