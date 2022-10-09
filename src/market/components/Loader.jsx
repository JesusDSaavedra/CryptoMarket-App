import './Loader.css'

export const Loader = () => {
  return (
    <div className='vw-100 vh-100'>
        <div className='position-absolute top-50 start-50 translate-middle '>
            <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    
  )
}
