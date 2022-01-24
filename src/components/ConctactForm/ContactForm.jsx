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
          <div>Contacto</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
            <label className='LabelContact'>Nombre:
              <input
                className='InputContact'
                type='text'
                value={buyer}
                onChange={({ target }) => setBuyer(target.value)}
              />
            </label>
            <label className='LabelContact'>Telefono:
              <input
                className='InputContact'
                type='text'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'>Direccion:
              <input
                className='InputContact'
                type='text'
                value={adress}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'>Comentario: 
              <input
                className='InputContact'
                type='text'
                value={comment}
                onChange={({ target }) => setComment(target.value)}
              />
            </label>
            <button className='Button' type='submit'>Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm