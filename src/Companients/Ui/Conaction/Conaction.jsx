import React from 'react'
import "./Conaction.scss"

const Conaction = () => {
  return (
    <div className='con'>
        <div className="con_wrapper">
            <div className="con_left">
                <h1>Bizga qanday savolingiz bor?</h1>
                <form className='con_form' action="">
                    <label htmlFor="ism">Ism</label>
                    <input type="text" id='ism' placeholder='Ismingizni kiriting'/>
                    <label htmlFor="email">Elektron pochta yoki Telegram</label>
                    <input type="text" id='email' placeholder='Elektron pochta yoki Telegram'/>
                    <label htmlFor="number">Telefon raqam</label>
                    <input type="text" id='number' placeholder='+998'/>
                    <label htmlFor="texta">Sizning habaringiz</label>
                    <textarea className='con_textarea' name="text" id="texta">Sizning raqamingiz</textarea>
                    <button className='con_btn'>Yuborsh</button>
                </form>
                <div className="con_right">
                    <img src="https://www.inoutads.uz/_nuxt/registerImg.527c043b.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Conaction