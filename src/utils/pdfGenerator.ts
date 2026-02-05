import jsPDF from 'jspdf';
import { CartItem } from '@/contexts/CartContext';

export const generatePDF = (items: CartItem[], totalPrice: number) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(45, 90, 61); // Primary green
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  // Logo text
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('MoveOn Sport', 20, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Ropa Deportiva Ecológica', 20, 33);

  // Date
  const date = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.setFontSize(10);
  doc.text(`Fecha: ${date}`, pageWidth - 60, 25);

  // Reset text color
  doc.setTextColor(0, 0, 0);

  // Title
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Reporte de Productos', 20, 55);

  // Subtitle
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text('Detalle de productos en tu carrito de compras', 20, 62);

  // Table Header
  let yPos = 75;
  doc.setFillColor(240, 240, 240);
  doc.rect(15, yPos - 5, pageWidth - 30, 10, 'F');
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('Producto', 20, yPos);
  doc.text('Talla', 90, yPos);
  doc.text('Precio', 115, yPos);
  doc.text('Cant.', 145, yPos);
  doc.text('Subtotal', 170, yPos);

  // Table Content
  yPos += 15;
  doc.setFont('helvetica', 'normal');
  
  items.forEach((item) => {
    const subtotal = item.price * item.quantity;
    
    // Product name (truncate if too long)
    const productName = item.name.length > 30 
      ? item.name.substring(0, 27) + '...' 
      : item.name;
    
    doc.setFontSize(9);
    doc.text(productName, 20, yPos);
    doc.text(item.selectedSize, 90, yPos);
    doc.text(`$${item.price.toFixed(2)}`, 115, yPos);
    doc.text(item.quantity.toString(), 150, yPos);
    doc.text(`$${subtotal.toFixed(2)}`, 170, yPos);

    // Eco badge
    doc.setTextColor(45, 90, 61);
    doc.setFontSize(7);
    doc.text(`🌿 ${item.eco}`, 20, yPos + 5);
    doc.setTextColor(0, 0, 0);
    
    yPos += 15;

    // Add new page if needed
    if (yPos > 260) {
      doc.addPage();
      yPos = 30;
    }
  });

  // Divider
  yPos += 5;
  doc.setDrawColor(200, 200, 200);
  doc.line(15, yPos, pageWidth - 15, yPos);
  
  // Total
  yPos += 15;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Total:', 130, yPos);
  doc.setTextColor(45, 90, 61);
  doc.text(`$${totalPrice.toFixed(2)}`, 170, yPos);

  // Footer
  const footerY = 280;
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(8);
  doc.setFont('helvetica', 'normal');
  doc.text('Gracias por elegir productos sostenibles.', pageWidth / 2, footerY, { align: 'center' });
  doc.text('MoveOn Sport - Moviendo el mundo hacia un futuro verde 🌍', pageWidth / 2, footerY + 5, { align: 'center' });

  // Save the PDF
  doc.save('MoveOnSport-Reporte.pdf');
};
