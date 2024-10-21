import React from 'react'
import "./More.scss"
import CheckIcon from '@mui/icons-material/Check';

const More = () => {
  return (
    <div className='more'>
        <div className="more_wrapper">
            <div className="more_title">
                <h1>Ish Joylari</h1>
            </div>
            <div className="more_cards">
                <div className="more_card1">
                    <h2>qo'ng'iroqlar markazi operatori</h2>
                    <h4>Kerakli ko'nikmalar</h4>
                    <p><CheckIcon/> Ma'lumoti: o'rta maxsus;</p>
                    <button>Koproq</button>
                </div>
                <div className="more_card1">
                    <h2>qo'ng'iroqlar markazi operatori</h2>
                    <h4>Kerakli ko'nikmalar</h4>
                    <p><CheckIcon/> Ma'lumoti: o'rta maxsus;</p>
                    <button>Koproq</button>
                </div>
                <div className="more_card1">
                    <h2>qo'ng'iroqlar markazi operatori</h2>
                    <h4>Kerakli ko'nikmalar</h4>
                    <p><CheckIcon/> Ma'lumoti: o'rta maxsus;</p>
                    <button>Koproq</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default More