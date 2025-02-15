// components/QuestionDistributionChart.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{ name: string; value: number }>;
  colors: Record<string, string>;
}

export const QuestionDistributionChart = ({ data, colors }: ChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 300 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const isMobileView = width < 768;
        setIsMobile(isMobileView);
        setChartDimensions({
          width: width,
          height: isMobileView ? 300 : 400
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center">
      <div className="w-full" style={{ height: chartDimensions.height }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={!isMobile}
              outerRadius={isMobile ? 100 : 160}
              fill="#8884d8"
              dataKey="value"
              label={({ cx, cy, midAngle, outerRadius, value, name }) => {
                if (isMobile) return null;
                const RADIAN = Math.PI / 180;
                const radius = outerRadius + 20;
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                    className="text-xs"
                    fill="#666"
                  >
                    {`${name} (${value})`}
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[entry.name] || '#999999'}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Responsive Legend */}
      <div className="mt-4 w-full px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                style={{
                  backgroundColor: colors[entry.name] || '#999999'
                }}
              />
              <span className="text-sm truncate">
                {entry.name} ({entry.value})
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};