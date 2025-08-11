import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { servicio, detalles } = await request.json();

    // 1. Lógica para dar precios basada en los servicios
    let precioEstimado = 0;
    let mensajeCotizacion = "";

    // Lógica de negocio simple
    if (servicio === 'Handyman') {
      precioEstimado = 300; // Ejemplo de precio base
      mensajeCotizacion = "El servicio de Handyman tiene un costo base de $150. El precio final puede variar según los detalles.";
    } else if (servicio === 'One-Day Shower Installation') {
      precioEstimado = 4500; // Ejemplo de precio para instalación de ducha
      mensajeCotizacion = "La instalación de ducha en un día tiene un precio base de $4500. Se requiere una inspección para un presupuesto exacto.";
    } else {
      precioEstimado = 3000; // Precio por defecto
      mensajeCotizacion = "Hemos recibido tu solicitud. Un experto te contactará para darte un presupuesto exacto. Precio estimado: $3000.";
    }

    // 2. Usar Gemini para generar una respuesta más detallada
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Un cliente ha solicitado una cotización para el servicio de "${servicio}" con los siguientes detalles: "${detalles}". El precio base estimado es de $${precioEstimado}. Genera una respuesta amigable y profesional para el cliente, confirmando que has recibido su solicitud y que un experto se pondrá en contacto para dar un presupuesto exacto y agendar una visita. Incluye un mensaje de agradecimiento.`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({
      status: 'success',
      cotizacion: responseText,
      precio_estimado: precioEstimado
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 'error',
      message: 'Ocurrió un error al procesar tu solicitud.'
    }, { status: 3000 });
  }
}