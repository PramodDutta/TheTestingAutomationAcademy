import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface RouterContextType {
  location: { pathname: string };
  navigate: (path: string, options?: { replace?: boolean }) => void;
}

const RouterContext = createContext<RouterContextType>({
  location: { pathname: '/' },
  navigate: () => {},
});

export function BrowserRouter({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState({ pathname: window.location.pathname });
  
  const navigate = (path: string, options?: { replace?: boolean }) => {
    if (options?.replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }
    setLocation({ pathname: path });
  };

  useEffect(() => {
    const handlePopState = () => {
      setLocation({ pathname: window.location.pathname });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  return useContext(RouterContext).location;
}

export function useNavigate() {
  return useContext(RouterContext).navigate;
}

export function Link({ to, children, className, replace }: { to: string; children: ReactNode; className?: string; replace?: boolean }) {
  const { navigate } = useContext(RouterContext);
  return (
    <a href={to} onClick={(e) => { e.preventDefault(); navigate(to, { replace }); }} className={className}>
      {children}
    </a>
  );
}

interface RouteProps {
  path?: string;
  element: ReactNode;
}

export function Routes({ children }: { children: ReactNode }) {
  const { location } = useContext(RouterContext);
  
  const routes = React.Children.toArray(children) as React.ReactElement<RouteProps>[];
  
  for (const route of routes) {
    const { path, element } = route.props;
    if (!path || path === location.pathname || (path === '*' && !routes.find(r => r.props.path === location.pathname))) {
      return <>{element}</>;
    }
  }
  
  return null;
}

export function Route({ element }: RouteProps) {
  return <>{element}</>;
}

export function useParams<T extends Record<string, string>>() {
  const { location } = useContext(RouterContext);
  const parts = location.pathname.split('/').filter(Boolean);
  const params: Record<string, string> = {};
  
  // Simple param extraction - assumes /courses/:slug format
  if (parts.length >= 2 && parts[0] === 'courses') {
    params.slug = parts[1];
  }
  
  return params as T;
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const { navigate } = useContext(RouterContext);
  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, to, replace]);
  return null;
}
