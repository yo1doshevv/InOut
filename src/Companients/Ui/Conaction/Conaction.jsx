import React, { useState } from 'react';
import './Conaction.scss';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Conaction = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const BOT_TOKEN = '8147966604:AAHv-67ymZB9aRZnuVmmk0XHqckt9Lwzm1I';
  const CHAT_ID = '6243320505';

  const validateInputs = () => {
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex
    const numberRegex = /^\+998\d{9}$/; // Uzbekistan phone number format

    if (!name || !email || !number || !message) {
      setError("Iltimos, barcha maydonlarni to'ldiring.");
      toast.error("Iltimos, barcha maydonlarni to'ldiring.");
      return false;
    }

    if (!nameRegex.test(name)) {
      setError("Ism faqat harflardan iborat bo'lishi kerak.");
      toast.error("Ism faqat harflardan iborat bo'lishi kerak.");
      return false;
    }

    if (!emailRegex.test(email)) {
      setError("Elektron pochta formati noto'g'ri.");
      toast.error("Elektron pochta formati noto'g'ri.");
      return false;
    }

    // if (!numberRegex.test(number)) {
    //   setError("Telefon raqam formati noto'g'ri. (+998xxxxxxx)");
    //   toast.error("Telefon raqam formati noto'g'ri. (+998xxxxxxx)");
    //   return false;
    // }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const text = `Ism: ${name}\nEmail: ${email}\nTelefon raqam: ${number}\nXabar: ${message}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        toast.success("Xabar muvaffaqiyatli yuborildi!");
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
      } else {
        toast.error("Xabar yuborishda xatolik yuz berdi.");
      }
    } catch (error) {
      console.error("Xato:", error);
      toast.error("Xabar yuborishda muammo yuz berdi.");
    }
  };

  return (
    <div className='con'>
      <div className='con_wrapper'>
        <div className='con_left'>
          <h1>Bizga qanday savolingiz bor?</h1>
          <form className='con_form' onSubmit={handleSubmit}>
            <label htmlFor='ism'>Ism</label>
            <input
              type='text'
              id='ism'
              placeholder='Ismingizni kiriting'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email'>Elektron pochta yoki Telegram</label>
            <input
              type='text'
              id='email'
              placeholder='Elektron pochta yoki Telegram'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='number'>Telefon raqam</label>
            <input
              type='text'
              id='number'
              placeholder='+998'
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor='texta'>Sizning xabaringiz</label>
            <textarea
              className='con_textarea'
              name='text'
              id='texta'
              placeholder='Sizning xabaringiz'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type='submit' className='con_btn'>
              Yuborish
            </button>
          </form>
          <div className='con_right'>
            <img
              src='https://www.inoutads.uz/_nuxt/registerImg.527c043b.png'
              alt=''
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Conaction;
