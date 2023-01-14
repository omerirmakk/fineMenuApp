import React from 'react';
import './main.css';

const Info = () => {
  return (
    <>
      <div className="Info_container">
        <h1>Fıstık</h1>
        <div>
          <div>
            <p>
              Değerlerimizden uzaklaşmadan, bulunduğumuz coğrafyanın ürünlerini
              kullanarak, Türk mutfağı için yeni bir alfabe yaratıyor; kendi
              köklerimize geri dönüp, aslında aşina olduğumuz tatları, modern,
              zarif ve sade bir şekilde, kendi tarzımızla yorumluyoruz.
              Araştırmak, meraklı olmak ve sürekli olarak yeni teknikler
              geliştirmek, felsefemizi özetliyor. Mirasımıza geri dönüp, hiçbir
              detayı es geçmeden, saflık ve basitliği en kusursuz şekilde
              sunmayı hedefliyoruz. Her yemeğin, tarihimizden, hatıralarımızdan
              ve geleneklerimizden ilham alan bir karakteri ve hikayesi olmasına
              özen gösteriyoruz.
            </p>
            <p>
              Yerel, artizan ve işini tutku ile yapan üreticilerle yakın bir
              şekilde çalışarak ve aralarında sürdürülebilir bir döngü kurarak,
              sadece doğanın, zamanı geldiğinde bize sunduğu ürünleri özenle
              işlemek; bundan ilham alarak hikayemizi sizlerle paylaşmak;
              bununla birlikte her tabakta, topraklarımızdan gelen ürünleri bir
              sanat eserine dönüştürebilmek en büyük isteğimiz.
            </p>
          </div>
          <div className="second">
            <p>
              <strong style={{ color: 'white' }}>FISTIK</strong> olarak,
              köklerimize ve mutfağımızın geleneklerine saygı göstermekle,
              korumakla yükümlüyüz
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
