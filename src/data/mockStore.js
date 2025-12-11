// Simulamos la sesión de un usuario de "Hoteles Piloto"
export const currentUser = {
  name: "Juan Pérez",
  role: "Gerente de Cocina",
  company: "Hotel Grand Central",
  // Regla de negocio: Límite para compra automática (Informe 3.3)
  approvalLimit: 1000000, 
};

// Simulamos los productos con la lógica B2B del informe
export const products = [
  {
    id: 1,
    sku: "LOM-VET-001",
    name: "Lomo Vetado Premium (Caja 20kg)",
    unit: "kg",
    listPrice: 180000, // Precio normal
    contractPrice: 155000, // Precio "Acuerdo Marco" (Informe 3.2)
    stock: 50,
    image: "https://profesorklocker.cl/cdn/shop/products/bifesdelomovetado.jpg?v=1681484066", 
    isAiRecommended: false,
  },
  {
    id: 2,
    sku: "SAL-ATL-002",
    name: "Salmón Atlántico Fresco",
    unit: "kg",
    listPrice: 12500,
    contractPrice: 10500,
    stock: 12, // Stock bajo
    image: "https://www.agrosuperventas.com/medias/sys_master/images/he0/hb8/9715343327262/300Wx300H_Salm%C3%B3n%20Sin%20piel%20(sin%20fondo)/300Wx300H-Salm-n-Sin-piel-sin-fondo-.jpg",
    // Esta bandera activa la alerta del "Motor IA" (Informe 3.3)
    isAiRecommended: true, 
    aiReason: "Predicción de alta demanda para este fin de semana. Stock crítico detectado.",
  },
  {
    id: 3,
    sku: "ACE-OLI-005",
    name: "Aceite de Oliva Extra Virgen (5L)",
    unit: "bidón",
    listPrice: 45000,
    contractPrice: 45000, // Sin descuento especial
    stock: 100,
    image: "https://izaro.cl/cdn/shop/products/aceite_de_oliva_1800x.jpg?v=1585680040",
    isAiRecommended: false,
  }
];