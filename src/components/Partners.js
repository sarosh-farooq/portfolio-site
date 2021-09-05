import React from 'react';
import utaas from './static/img/utaas.png'
import pdf from './static/img/pdf.svg'
import hospice from './static/img/hospice.png'
import bullet from './static/img/bullet.png'
import './static/css/partners.css'



const Partners = () => {
    return (
        <div className='partner'>
            <div className="partner_detail">

               <a target='_blank' href="https://utaasgroup.com/">
                <img src='https://utaasgroup.com/wp-content/uploads/2020/09/cropped-Utaas-removebg-preview-1-174x64.png' alt="" />
               </a>
               <a target='_blank' href="https://onlineconvertpdf.com/">
                <img src={pdf} alt="" />
                </a>
                <a target='_blank' href="https://hospice.pk/">
                <img src={hospice} alt="" />
                </a>
                <a target='_blank' href="https://bulletinstock.com/">
                <img src='https://bulletinstock.com/wp-content/uploads/2020/12/Bulletinstock-logo.png' alt="" />
                </a>
            </div>
        </div>
    )
}

export default Partners
