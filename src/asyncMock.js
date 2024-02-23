const products = [
    {
        id: '1',
        name: 'Data Science',
        price: 2500,
        category: 'certificado',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Octubre/Data%20Science/Cre-Data%20Science.jpg',
        stock: 50,
        description: 'En este certificado el participante aprenderá sobre los lenguajes y herramientas que le apoyarán en el análisis y representación de datos. Aprenderá sobre data wrangling, un proceso vital para poder preparar la información para tareas más avanzadas, la diferencia respecto al data mining, las habilidades que requieres para utilizarlo y los retos a los que te enfrentarás para ello. Por último, aprenderá qué es la IA, su evolución, los campos que abarca, etapas, tipos y aplicaciones.'
    },
    {
        id: '2',
        name: 'Análisis de datos con Python',
        price: 4037,
        category: 'bootcamp',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/junio%202023/Varios/An%C3%A1lisis-de-datos-con-Python-T.jpg',
        stock: 50,
        description: 'En este curso el aprendedor obtendrá los conocimientos teóricos y prácticos para procesar grandes volúmenes de datos y realizar análisis más robustos, aplicando y generando diversos modelos tanto estadísticos como matemáticos que te permitan encontrar los patrones y las relaciones en los datos; con el objetivo de producir visualizaciones avanzadas para facilitar el entendimiento de la información.'
    },
    {
        id: '3',
        name: 'Big Data',
        price: 4320,
        category: 'certificado',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/agosto/Cer-Big%20Data.jpg',
        stock: 50,
        description: 'En este certificado el participante aprenderá a ampliar tus conocimientos en Big Data y tecnologías existentes, así como el almacenamiento y tratamiento de grandes volúmenes de datos.'
    },
    {
        id: '4',
        name: 'Computación Avanzada en Java',
        price: 2500,
        category: 'certificado',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/septiembre/Productividad%20Basada%20en%20Herramientas/Cred-Computacio%CC%81n-Avanzada-en-Java.jpg',
        stock: 50,
        description: 'En este certificado el participante aprenderá todas las herramientas para crear aplicaciones orientadas a objetos avanzadas, con entornos de trabajo o Frameworks ampliamente usados, con base en los principios de la programación estructurada y patrones de diseño, escalables y eficientes.'
    },
    {
        id: '5',
        name: 'Agilidad para tu negocio (PM agile)',
        price: 7308,
        category: 'bootcamp',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Enero%202023/Agilidad-para-tu-Negocio-PM-agile-T.jpg',
        stock: 50,
        description: 'Este curso el aprendedor conocerá los fundamentos de la mentalidad ágil, así como sus principales marcos de trabajo, prácticas, valores y principios que permitan al aprendedor desarrollar y dirigir una estrategia de cambio en una organización.'
    },
    {
        id: '6',
        name: 'Animación Digital 3D',
        price: 4320,
        category: 'certificado',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/septiembre/Animacion%20digital/Cert-Animacio%CC%81n-Digital-3D.jpg',
        stock: 50,
        description: 'En este certificado el participante aprenderá a generar objetos tridimensionales con textura y material a partir de diseños bidimensionales, producir movimientos sobre un modelo tridimensional, así como adaptar sistemas de esqueletos en 3D y aplicar técnicas de luz y textura para crear animaciones de alta calidad.'
    },
    {
        id: '7',
        name: 'Atracción del Capital Humano',
        price: 9600,
        category: 'curso',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Diciembre%2022/Administracio%CC%81n%20del%20Capital%20Humano/Atraccion_del_Capital_Humano.png',
        stock: 50,
        description: 'En esta microcourse el participante conocerá las fuentes de reclutamiento digitales, aplicará las técnicas de entrevista y pruebas psicométricas'
    },
    {
        id: '8',
        name: 'Automatización del marketing',
        price: 9600,
        category: 'curso',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Diciembre%2022/Comercio%20electro%CC%81nico%20y%20automatizacio%CC%81n/Automatizaci%C3%B3n%20del%20Marketing%20T.jpg',
        stock: 50,
        description: 'En este mastercourse el participante diseñará planes de automatización de marketing que aporten a las empresas a la mejora de su producción y eficiencia así como mejorar en su comunicación y ventas.'
    },
    {
        id: '9',
        name: 'Backend con Node js nivel avanzado',
        price: 7308,
        category: 'bootcamp',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Enero%202023/Backend-con-Node-js-Nivel-Avanzado-T.jpg',
        stock: 50,
        description: 'En este curso el aprendedor conocerá sobre los módulos en node.js y su seguridad, las bases de datos por medio de las cuales pueden emplearlo, así como también sobre las pruebas de calidad y despliegues más utilizados.'
    },
    {
        id: '10',
        name: 'Analítica de datos',
        price: 9600,
        category: 'curso',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Diciembre%2022/Inteligencia%20de%20Mercados/Anal%C3%ADtica%20de%20Datos%20T.jpg',
        stock: 50,
        description: 'En este microcourse el participante conocerá el modelo de Data Science y Big data, aprenderá sobre la ciencia de datos, así como la preparación de ellos, aprenderá sobre las técnicas necesarias para realizar procesos de almacenamiento, análisis, manipulación y transformación de datos'
    },
    {
        id: '11',
        name: 'Cloud y Network Security',
        price: 7308,
        category: 'bootcamp',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/Enero%202023/Cloud-&-Network-Security.jpg',
        stock: 50,
        description: 'En este curso el aprendedor tendrá la oportunidad de conocer más a fondo acerca de la seguridad de la información que se encuentra en la red, en especial la almacenada en la nube, así como las diferentes herramientas que protegen dicha información y como aplicarlas en los sistemas.'
    },
    {
        id: '12',
        name: 'Business Analytics (Excel)',
        price: 10500,
        category: 'bootcamp',
        img: 'https://cdc.tecmilenio.mx/hubfs/Thumbnails_CDC/junio%202023/Business-Intelligence-T.jpg',
        stock: 50,
        description: 'En este curso el aprendedor conocerá sobre los principios básicos de la inteligencia de negocios, sus roles y el marco de trabajo. Además, aprenderá sobre el análisis predictivo y cómo esto puede ayudar a las organizaciones. La importancia de la visualización de datos, los componentes que lo conforman, así como también el uso que se le debe dar y cuáles son las mejores prácticas para poder contar historias basadas en datos.'
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod=>prod.id === productId))
        }, 200);
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 200);
    })
}