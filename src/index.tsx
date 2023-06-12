import * as React from 'react'
import './styles.scss'

type FooProps = {
	name: 'foo'
	children: React.ReactNode
  }

export const ReactDomSafeArea = ({ children }: FooProps ) => {
  const containerRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (
			navigator.userAgent.toLowerCase().match(/mobile/i) &&
			navigator.userAgent.match(/ipad|ipod|iphone/i) &&
			"ontouchend" in document &&
			containerRef.current
		) {
			containerRef.current.classList.remove("min-h-screen");
			containerRef.current.classList.add("min-h-screen-mobile");
		}
  }, []);

 return (
 <div ref={containerRef as React.RefObject<HTMLDivElement>} className="react-dom-safe-area">
    {children}
  </div>
  );
}


