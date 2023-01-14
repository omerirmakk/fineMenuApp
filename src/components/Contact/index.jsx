import React from 'react';
import './main.css';

const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
        <div className="subes istanbul">
          <div>
            <h1>FISTIK İSTANBUL</h1>
            <p>
              Ayazağa Mah. Azerbaycan Cad.
              <br />
              No:3/C, 34500 Sarıyer/İSTANBUL <br />
              <strong>Tel:</strong> 0 212 999 55 12 <br />
              <strong>E-Posta:</strong> Info@fistik.com.tr
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96199.75658704425!2d28.986714!3d41.107397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7075e8e9804d904b!2zVmFkaXN0YW5idWwgQWzEscWfdmVyacWfIE1lcmtlemk!5e0!3m2!1str!2sus!4v1673612281037!5m2!1str!2sus"
              width={500}
              className="map"
              height={350}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="subes izmir">
          <div>
            <h1>FISTIK İZMİR</h1>
            <p>
              Bahçeler Arası Mah. Şehit Binbaşı Ali <br /> Resmi Tufan Sokak
              <br />
              No:3, 35330 Balçova/İzmir <br />
              <strong>Tel:</strong> 0 232 999 85 39 <br />
              <strong>E-Posta:</strong> Info@fistik.com.tr
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.8268290085625!2d27.066108915605533!3d38.399252883756795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdd12bdc22863%3A0x20701b2d706a60f0!2zxLBzdGlueWVQYXJrIMSwem1pcg!5e0!3m2!1str!2sus!4v1673614221350!5m2!1str!2sus"
              width={500}
              height={350}
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="subes ankara">
          <div>
            <h1>FISTIK ANKARA</h1>
            <p>
              Gaziosmanpaşa, Şht. Ömer Haluk
              <br /> Sipahioğlu Sk.
              <br />
              No:8, 06700 Çankaya/Ankara <br />
              <strong>Tel:</strong> 0 312 999 42 22 <br />
              <strong>E-Posta:</strong> Info@fistik.com.tr
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12243.507869862493!2d32.8650285!3d39.8993868!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1595c4acf596d9cb!2sNusr-Et%20Steakhouse%20Ankara!5e0!3m2!1sen!2str!4v1673614280097!5m2!1sen!2str"
              width={500}
              height={350}
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer">
        <p></p>
      </div>
    </>
  );
};

export default Contact;
