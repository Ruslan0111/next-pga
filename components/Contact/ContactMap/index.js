import styles from './index.module.scss';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import L from 'leaflet';

function ContactMap() {
  const { t } = useTranslation();

  useEffect(() => {
    const map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13,
      zoomControl: false
    });

    const defaultIcon = L.icon({
     iconSize: [ 25, 41 ],
     iconAnchor: [ 13, 0 ],
     iconUrl: "/images/marker-icon.png",
     shadowUrl: "/images/marker-shadow.png"
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(map);

    L.marker([51.5, -0.09], {icon: defaultIcon}).addTo(map)

    return function() {
      map.remove();
    }
  }, [])

  return (
    <div className={styles.contact__map}>
      <div className={`${styles.contact__map__inner} d-flex`}>
        <div className={styles.contact__map__left}>
          <div id="map" className={styles.map}></div>
        </div>
        <div className={styles.contact__map__right}>
          <h3 className="pn-semibold">
            { t('contactUs.info') }
          </h3>
          <ul>
            <li className="text-sm">{ t('contactUs.location') }</li>
            <li className="text-sm">
              <span><a href="tel:+998977777777">+998 (97) 777-77-77</a></span>
              <a href="tel:+998974441144">+998 (97) 444-11-44</a>
            </li>
            <li className="text-sm">Info@pga.uz</li>
            <li className="text-sm">www.Pga.uz</li>
          </ul>
          <div className={styles.contact__map__social}>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g id="Group_138" data-name="Group 138" transform="translate(-859 137)"><g id="Rectangle_15" data-name="Rectangle 15" transform="translate(859 -137)" fill="none" stroke="#FFA206" strokeWidth="2"><rect width="40" height="40" stroke="none"></rect><rect x="1" y="1" width="38" height="38" fill="none"></rect></g><path id="facebook" d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z" transform="translate(866.5 -128.5)" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="2"></path></g></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g id="Group_139" data-name="Group 139" transform="translate(-838 105)"><g id="Rectangle_13" data-name="Rectangle 13" transform="translate(838 -105)" fill="none" stroke="#FFA206" strokeWidth="2"><rect width="40" height="40" stroke="none"></rect><rect x="1" y="1" width="38" height="38" fill="none"></rect></g><path id="twitter" d="M22.635,3.284A8.286,8.286,0,0,1,19.86,4.53a4.48,4.48,0,0,0-7.86,3v1C8.431,8.623,6.323,7.791,3,4c0,0-4,9,5,13a14.074,14.074,0,0,1-7,2c8.765,5.352,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83,5.863,5.863,0,0,0,1.715-3.386Z" transform="translate(845.5 -95.49)" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="2"></path></g></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g id="Group_140" data-name="Group 140" transform="translate(-839 148)"><g id="Rectangle_14" data-name="Rectangle 14" transform="translate(839 -148)" fill="none" stroke="#FFA206" strokeWidth="2"><rect width="40" height="40" stroke="none"></rect><rect x="1" y="1" width="38" height="38" fill="none"></rect></g><g id="send" transform="translate(846 -139)"><path id="Path_90" data-name="Path 90" d="M10.282.812,0,11" transform="translate(11 2)" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="2"></path><path id="Path_7" data-name="Path 7" d="M22,2,15,22l-4-9L2,9Z" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="2"></path></g></g></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g id="Group_141" data-name="Group 141" transform="translate(-852 96)"><g id="Rectangle_16" data-name="Rectangle 16" transform="translate(852 -96)" fill="none" stroke="#FFA206" strokeWidth="2"><rect width="40" height="40" stroke="none"></rect><rect x="1" y="1" width="38" height="38" fill="none"></rect></g><g id="youtube" transform="translate(860.001 -88)"><path id="Path_8" data-name="Path 8" d="M22.54,6.42a2.78,2.78,0,0,0-1.94-2C18.88,4,12,4,12,4s-6.88,0-8.6.46a2.78,2.78,0,0,0-1.94,2A29,29,0,0,0,1,11.75a29,29,0,0,0,.46,5.33A2.78,2.78,0,0,0,3.4,19c1.72.46,8.6.46,8.6.46s6.88,0,8.6-.46a2.78,2.78,0,0,0,1.94-2A29,29,0,0,0,23,11.75a29,29,0,0,0-.46-5.33Z" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="2"></path><path id="Path_9" data-name="Path 9" d="M9.75,13.956l4.814-2.738L9.75,8.48Z" transform="translate(0.468 0.532)" fill="none" stroke="#FFA206" strokeLinecap="square" strokeWidth="1.5"></path></g></g></svg></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMap;