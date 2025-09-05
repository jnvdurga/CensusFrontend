// utils/captureMap.js
import { useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const useMapScreenshot = () => {
  const mapRef = useRef(null);

  const captureMapScreenshot = useCallback(async (fileName = 'colombia-map', format = 'png') => {
    if (!mapRef.current) {
      throw new Error('Map reference not found');
    }

    const mapElement = mapRef.current;

    if (!document.body.contains(mapElement)) {
      throw new Error('Map element is not attached to the document');
    }

    // 🔹 Function to temporarily remove transforms
   const fixLeafletTransforms = (element) => {
  const panes = element.querySelectorAll('.leaflet-pane');
  const originalStyles = [];

  panes.forEach((pane) => {
    const style = window.getComputedStyle(pane);
    const transform = style.transform || '';
    const match = transform.match(/translate\(([-\d.]+)px, ([-\d.]+)px\)/);
    const left = match ? parseFloat(match[1]) : 0;
    const top = match ? parseFloat(match[2]) : 0;

    originalStyles.push({ pane, transform });
    pane.style.transform = 'none';
    pane.style.left = `${left}px`;
    pane.style.top = `${top}px`;
  });

  return () => {
    originalStyles.forEach(({ pane, transform }) => {
      pane.style.transform = transform;
      pane.style.left = '';
      pane.style.top = '';
    });
  };
};

    const restoreTransforms = fixLeafletTransforms(mapElement);

    try {
      // Wait a short time to ensure tiles are fully loaded
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(mapElement, {
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        ignoreElements: (el) =>
          el.classList.contains('leaflet-control-zoom') ||
          el.classList.contains('leaflet-control-attribution'),
      });

      if (format === 'png') {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${fileName}-${new Date().toISOString().slice(0, 10)}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return canvas.toDataURL('image/png');
      } else if (format === 'pdf') {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${fileName}-${new Date().toISOString().slice(0, 10)}.pdf`);
        return imgData;
      }
    } catch (error) {
      console.error('Error capturing map screenshot:', error);
      throw error;
    } finally {
      // Restore transforms after capture
      restoreTransforms();
    }
  }, []);

  return { mapRef, captureMapScreenshot };
};
