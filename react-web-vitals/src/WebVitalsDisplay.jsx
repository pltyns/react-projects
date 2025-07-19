import React, { useEffect, useState } from 'react';
import { getCLS, getFID, getLCP, getTTFB, getFCP } from 'web-vitals';

const getDescription = (name, value) => {
  switch (name) {
    case 'TTFB':
      return {
        desc: 'Time to First Byte. Measures how long it takes to receive the first byte from the server.',
        status:
          value < 800
            ? '✅ Good'
            : value < 1800
            ? '⚠️ Needs Improvement'
            : '❌ Poor',
      };
    case 'FCP':
      return {
        desc: 'First Contentful Paint. Time it takes for the first piece of content to appear on screen.',
        status:
          value < 1800
            ? '✅ Good'
            : value < 3000
            ? '⚠️ Needs Improvement'
            : '❌ Poor',
      };
    case 'LCP':
      return {
        desc: 'Largest Contentful Paint. Measures how long it takes for the largest visible element to load.',
        status:
          value < 2500
            ? '✅ Good'
            : value < 4000
            ? '⚠️ Needs Improvement'
            : '❌ Poor',
      };
    case 'FID':
      return {
        desc: 'First Input Delay. Measures how quickly the page responds to the user’s first interaction.',
        status:
          value < 100
            ? '✅ Good'
            : value < 300
            ? '⚠️ Needs Improvement'
            : '❌ Poor',
      };
    case 'CLS':
      return {
        desc: 'Cumulative Layout Shift. Measures unexpected layout shifts during the page load.',
        status:
          value < 0.1
            ? '✅ Good'
            : value < 0.25
            ? '⚠️ Needs Improvement'
            : '❌ Poor',
      };
    default:
      return {
        desc: 'No description available.',
        status: '',
      };
  }
};

const WebVitalsDisplay = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const handleMetric = (metric) => {
      setMetrics((prev) => [...prev, metric]);
    };

    getCLS(handleMetric);
    getFID(handleMetric);
    getLCP(handleMetric);
    getFCP(handleMetric);
    getTTFB(handleMetric);
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>📊 Web Vitals Metrics</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {metrics.map((metric, index) => {
          const { desc, status } = getDescription(metric.name, metric.value);
          return (
            <li
              key={index}
              style={{
                background: '#f4f4f4',
                margin: '0.5rem 0',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'left',
                maxWidth: '500px',
                marginInline: 'auto',
              }}
            >
              <strong>{metric.name}</strong>: {metric.value.toFixed(2)} {metric.unit || ''}
              <p style={{ margin: '0.5rem 0' }}>{desc}</p>
              <p><strong>Status:</strong> {status}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WebVitalsDisplay;
