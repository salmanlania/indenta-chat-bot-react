import React, { useState, useEffect } from 'react';
import pdfj from './CorporateTax.pdf';
import * as pdfjs from 'pdfjs-dist/build/pdf';

pdfjs.GlobalWorkerOptions.workerSrc = 'path-to-pdf.worker.js';

const Ebook = () => {
  const [pdf, setPdf] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = ['Section 1', 'Section 2', 'Section 3'];

  const handleSectionChange = (index) => {
    setSelectedSection(index);
  };

  useEffect(() => {
    const pdfUrl ={pdfj};
    fetchPdf(pdfUrl);
  }, []);

  const fetchPdf = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const fileReader = new FileReader();
        fileReader.onload = function () {
          const typedarray = new Uint8Array(this.result);
          pdfjs.getDocument({ data: typedarray }).promise.then((loadedPdf) => {
            setPdf(loadedPdf);
          });
        };
        fileReader.readAsArrayBuffer(blob);
      });
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <Index sections={sections} onSectionClick={handleSectionChange} />
      </div>
      <div style={{ flex: 3 }}>
        <h2>{sections[selectedSection]}</h2>
        {pdf && (
          <PdfViewer pdf={pdf} selectedSection={sections[selectedSection]} />
        )}
        <p>Content related to {sections[selectedSection]}</p>
      </div>
    </div>
  );
};

const Index = ({ sections, onSectionClick }) => {
  return (
    <div>
      <h2>Index</h2>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <a href={`#section-${index}`} onClick={() => onSectionClick(index)}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PdfViewer = ({ pdf, selectedSection }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPdfPage = () => {
    pdf.getPage(currentPage).then((page) => {
      const canvas = document.getElementById('pdf-canvas');
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      page.render(renderContext);
    });
  };

  useEffect(() => {
    renderPdfPage();
  }, [pdf, currentPage]);

  return (
    <div>
      <canvas id="pdf-canvas" />
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous Page
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pdf.numPages))
          }
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Ebook;
