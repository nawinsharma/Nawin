'use client';
import dynamic from 'next/dynamic';
import { useCallback, useState, useEffect } from 'react';
import { Activity } from 'react-github-calendar';

const GitHubCalendar = dynamic(() => import('react-github-calendar'), {
  ssr: false,
  loading: () => <div className="h-[120px] sm:h-[140px] md:h-[159px] w-full" />,
});

function GithubCalender() {
  const [totalCount, setTotalCount] = useState(0);
  const [screenSize, setScreenSize] = useState('md');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 768) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const processContributions = useCallback((contributions: Activity[]) => {
    // Hack to calculate total count after rendering
    setTimeout(() => {
      const total = contributions
        .map((el) => el.count)
        .reduce((acc, curr) => acc + curr, 0);

      setTotalCount(total);
    }, 0);

    return contributions.slice(91, 365);
  }, []);

  const getResponsiveProps = () => {
    switch (screenSize) {
      case 'sm':
        return { fontSize: 10, blockSize: 8, blockMargin: 2 };
      case 'md':
        return { fontSize: 11, blockSize: 10, blockMargin: 3 };
      default:
        return { fontSize: 12, blockSize: 12, blockMargin: 4 };
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]">
        <GitHubCalendar
          username="nawinsharma"
          transformData={processContributions}
          totalCount={totalCount}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
          }}
          {...getResponsiveProps()}
          hideColorLegend={false}
          hideMonthLabels={false}
          showWeekdayLabels={true}
          style={{
            width: '100%',
            maxWidth: '100%',
          }}
        />
      </div>
    </div>
  );
}

export default GithubCalender;