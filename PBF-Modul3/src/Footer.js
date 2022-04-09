import React from 'react';// Component menggunakan Functionconst 
const Footer = (props) => {
 return (
  <div>
   <h3>{ props.judul } (Latihan React)</h3>
   <h3>Component ini dibuat menggunakan Function bukan Class</h3>
   <li>Nilai ini ditampilkan dari props: { props.judul } </li>
   <li>Nama Saya: { props.nama } </li>
  </div>
 );
};
export default Footer;
