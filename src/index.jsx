import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Carr from './CarruselIm';
import Example from './Menu';
import Pag2 from './Pagina2';
import AnuncioSup from './PedidosYa';
import Formular from './Formulario';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartillas from './Cartilla';
import Pedidos from './Pedido';
import Dividir from './Division';
import Carru from './Carrusel2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AnuncioSup />
    <Example seccion="---- Productos para la Cara (Skincare) ----" s1="Analgesicos" s2="Belleza" s3="Cuidado Personal" s4="Hogar" s5="Lo Nuevo" s6="Salud y Medicamentos" s7="Todo para tu bebé" />
    <Carr />
    <Pag2  nombrepromo="Problemas?" descripcion="Buscas más ofertas?" parrafo="Recuerda que tu carrito solo acepta hasta 20 productos" />
    <Pag2 nombrepromo="Ofertas" descripcion="Problemas con tu carrito" parrafo="No olvides que pagando con tu tarjeta Mercantil Santa Cruz obtienes un 10% de descuento en toda tu compra" />
    <Cartillas titulo1="Protector Labial Nivea" subtitulo="Bs. 26.80" medi="s1.jpg" descripcion="Lip Care Cherry Shine X Unidad" />
    <Cartillas titulo1="Isdin Fotoprotector Fusion" subtitulo="Bs. 226.50" medi="s2.jpg" descripcion="Isdin Fotoprotector Fusion Spf 50 Water Color X 50Ml" />
    <Cartillas titulo1="Eucerin Sun Oil" subtitulo="Bs. 216.21" medi="s3.jpg" descripcion="Eucerin Sun Oil Control Fps 50 Toque Seco X 50Ml" />
    <Cartillas titulo1="Agua Micelar Garnier" subtitulo="Bs. 66.00" medi="s4.jpg" descripcion="Garnier Skin Active Agua Micelar X 100Ml" />
    <Cartillas titulo1="Asepxia Crema Exfoliante" subtitulo="Bs. 73.54" medi="s9.jpg" descripcion="Asepxia Crema Exfoliante Carbon Purificante X 120G" />
    <Cartillas titulo1="Velia Contorno De Ojos" subtitulo="Bs. 36.80" medi="s6.jpg" descripcion="Velia Contorno De Ojos Parche Dermico Hidrogel X 2 Parches" />
    <Cartillas titulo1="Crema Aclarante Ponds" subtitulo="Bs. 37.23" medi="s5.jpg" descripcion="Ponds Clarant B3 Spf 15 Crema Aclaradora X 100G" />
    <Cartillas titulo1="Garnier Mascarilla Facial" subtitulo="Bs. 29.80" medi="s8.jpg" descripcion="Garnier Mascarilla Facial Hidratante Y Matificante X Unidad" />
    <Cartillas titulo1="Serum Loreal" subtitulo="Bs. 126.80" medi="s7.jpg" descripcion="Loreal Revitalift Ac Hialuronic Serum Relle X 30Ml" />
    <Cartillas titulo1="Fotoprotector Isdin" subtitulo="Bs. 246.33" medi="s10.jpg" descripcion="Fotoprotector Isdin Uv Mineral Brush Spf50+ X 2G" />
    <Cartillas titulo1="Nivea Crema de Rosas" subtitulo="Bs. 46.60" medi="s12.jpg" descripcion="Nivea Roses Crema Hidratante X 50Ml" />
    <Cartillas titulo1="Isocheck 20mg" subtitulo="Bs. 7.10" medi="s13.jpg" descripcion="Isocheck 20Mg Isotretinoina X Capsula Blanda" />
    <Cartillas titulo1="Sesderma Azelac" subtitulo="Bs. 316.90" medi="s11.jpg" descripcion="Sesderma Azelac Ru Serum Despigmentate X 30Ml" />
    <Cartillas titulo1="Bloqueador Solar Solaris" subtitulo="Bs. 176.00" medi="s15.jpg" descripcion="Solaris Bloqueador Solar Fps 80 X 75G" />
    <Cartillas titulo1="Vitamina E" subtitulo="Bs. 144.10" medi="s16.jpg" descripcion="Natural E 400Ui Suplemento Vitamina E X 90 Capsulas" />
    <Cartillas titulo1="Sesderma vitamin C" subtitulo="Bs. 326.80" medi="s14.jpg" descripcion="Sesderma C-Vit5 Liposomal Serum X 30Ml" />
    <Pedidos desc="Estas listo/a para pedir? Llena el siguiente formulario y el pedido te llegara a la puerta de tu casa en tan solo minutos" />
    <Formular />
    <Dividir nropagina="Pagina 3" />
    <AnuncioSup />
    <Example seccion="---- Todo para tu Bebé ----" s1="Analgesicos" s2="Belleza" s3="Cuidado Personal" s4="Hogar" s5="Lo Nuevo" s7="Salud y Medicamentos" s6="Productos para la cara (Skincare)" />
    <Carru />
    <Pag2  nombrepromo="Problemas?" descripcion="Buscas más ofertas?" parrafo="Recuerda que tu carrito solo acepta hasta 20 productos" />
    <Pag2 nombrepromo="Ofertas" descripcion="Problemas con tu carrito" parrafo="No olvides que pagando con tu tarjeta Mercantil Santa Cruz obtienes un 10% de descuento en toda tu compra" />
    <Cartillas titulo1="Nan Optipro" subtitulo="Bs. 186.80" medi="b1.jpg" descripcion="Nan 2 Optipro X 1.1Kg" />
    <Cartillas titulo1="Aceite Para Bebé Johnsons" subtitulo="Bs. 43.50" medi="b6.png" descripcion="Aceite Para Bebé Johnsons Puro X 100Ml" />
    <Cartillas titulo1="Cerelac 5 cereales" subtitulo="Bs. 40.11" medi="b2.jpg" descripcion="Cerelac 5 Cereales Y Leche Nuevo X 400G" />
    <Cartillas titulo1="Johnson Baby Shampoo" subtitulo="Bs. 67.00" medi="b5.jpg" descripcion="Johnson Baby Shampoo Para Bebé Ph Balanceado X 750Ml" />
    <Cartillas titulo1="Chupete ortodontico" subtitulo="Bs. 33.54" medi="b8.jpg" descripcion="Nuby Chupete Orthodontic 6-12M C Tapa # 5794Mosn" />
    <Cartillas titulo1="Cereal Nestum" subtitulo="Bs. 38.00" medi="b33.jpg" descripcion="Nestum Multicereal Con Quinua X 270G" />
    <Cartillas titulo1="Pigeon Chupete" subtitulo="Bs. 37.23" medi="b7.jpg" descripcion="Pigeon Chupete Silicona Lección 3 Barco Celeste" />
    <Cartillas titulo1="Pomada Hipoglos" subtitulo="Bs. 119.80" medi="b13.jpg" descripcion="D Hipoglos C Emulsion X 120G" />
    <Cartillas titulo1="Vaso Mamadera" subtitulo="Bs. 56.80" medi="b16.jpg" descripcion="Avent Vaso Con Boquilla Y Asas 6M+ X 200Ml" />
    <Cartillas titulo1="Hisopos Flexibles" subtitulo="Bs. 36.33" medi="b4.jpg" descripcion="Hisopos Flexibles Cotonetes Johnson Y Johnson X 300 Unidades" />
    <Cartillas titulo1="Isomar Spray Nasal" subtitulo="Bs.114.60" medi="b12.jpg" descripcion="Isomar Spray Nasal Descongestionante X 50Ml" />
    <Cartillas titulo1="Mamadera Dr. Browns" subtitulo="Bs. 79.10" medi="b15.jpg" descripcion="Dr Browns Mamadera Options Anti Colic X 250Ml" />
    <Cartillas titulo1="Heinz sabor Manzana" subtitulo="Bs. 8.10" medi="b9.jpg" descripcion="Heinz Colado De Manzana X 113G" />
    <Cartillas titulo1="Huggies triple G" subtitulo="Bs. 46.00" medi="b11.jpg" descripcion="Huggies Triple Proteccion G X 32 Unidades" />
    <Cartillas titulo1="Baby Johnson Shampoo" subtitulo="Bs. 44.10" medi="b14.jpg" descripcion="Johnson Shampoo Para Bebé Ph Balanceado X 400Ml" />
    <Cartillas titulo1="Heinz sabor Banana" subtitulo="Bs. 8.10" medi="b10.jpg" descripcion="Heinz Colado De Banana X 113G" />
    <Pedidos desc="Estas listo/a para pedir? Llena el siguiente formulario y el pedido te llegara a la puerta de tu casa en tan solo minutos" />
    <Formular />
    <Dividir nrpagina="Pagina 4" />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
