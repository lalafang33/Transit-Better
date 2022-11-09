import './SavedAddress.css'
import BackButton from './BackButton';

const SavedAddress = () => {

  return(
    <div className='address-container'>
      <h1 className='address-header'> My Saved Location: </h1>
      <p className='address-text'>Mall: 701 W Georgia St, Vancouver, BC V7Y 1G5</p>
      <BackButton/>
    </div>
  )
}

export default SavedAddress; 