import React from 'react';
import './css/Contact.css'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact__box box">
                <div className="contact__box-heading">
                    <h2>Aloqa</h2>
                </div>
                <div className="contact__form-content">
                    <form className="contact__form" action="#" method="post">
                        <div className="form-content__name">
                            <label htmlFor="fio" >Ism va Familiyangizni kriting F.I.O.</label> <br />
                            <input type="text" name="fio" placeholder="Bu yerga yozing" required />
                        </div>
                        <div className="form-content__email">
                            <label htmlFor="email">Telefon nomer yoki Emailingizni kiriting</label> <br />
                            <input type="mail" name="email" placeholder="Telefon / Email" required />
                        </div>
                        <button className="button contact__button" type="submit">Yuborish</button>
                    </form>
                </div>
            </div>
        </section>
    )
}