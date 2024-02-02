import ProfileCard from "./ProfileCard";
import ventas from "./../../img/ventas.png";
import finanzas from "./../../img/finanzas.jpeg";
import excel from "./../../img/excel.jpeg";

function ItemListContainer() {
    return <>
            <section className="Hero">
            
            </section>
            <section className="Columns Itemlist">
                <ProfileCard titulo={"Finanzas"} descripcion={"Certificado: 12 semanas"} precio={7200} img={finanzas} className="Column"/>
                <ProfileCard titulo={"Excel"} descripcion={"Ruta"} precio={15000} img={excel} className="Column"/>
                <ProfileCard titulo={"Ventas"} descripcion={"Certificado"} precio={6800} img={ventas} className="Column"/>
            </section>;
        </>
}

export default ItemListContainer;
