import { useState } from 'react'


const ContactForm = ({ toggleVisibility, setContact }) => {

    const [buyer, setBuyer] = useState('')
    const [phone, setPhone] = useState('')
    const [adress, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            buyer,
            phone,
            adress,
            comment
        }
        setContact(objContact)
        setBuyer('')
        setPhone('')
        setAddress('')
        setComment('')
    }

    return (
        <div className='ContactContainer'>

          <h5>Contacto</h5>

          <form className='ContactForm' onSubmit={handleContactForm}>

            <div>
              <label className='LabelContact'>Nombre:
                <input className='InputContact' type='text' value={buyer} onChange={({ target }) => setBuyer(target.value)}/>
              </label>
            </div>

            <div>
              <label className='LabelContact'>Telefono:
                <input className='InputContact' type='text' value={phone} onChange={({ target }) => setPhone(target.value)}/>
              </label>
            </div>

            <div>
              <label className='LabelContact'>Direccion:
                <input className='InputContact' type='text' value={adress} onChange={({ target }) => setAddress(target.value)}/>
              </label>
            </div>

            <div>
              <label className='LabelContact'>Comentario: 
                <input className='InputContact' type='text' value={comment} onChange={({ target }) => setComment(target.value)}/>
              </label>
            </div>

            <div>
              <button className='btnContacto' type='submit'>Confirmar</button>
            </div>

          </form>

        </div>
      )
}

export default ContactForm