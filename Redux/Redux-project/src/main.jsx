import { Provider } from 'react-redux';
import { store } from './components/store';
import { ThemeProvider } from './components/ThemeContext';
import App from './App';

// In your render function:
<Provider store={store}>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</Provider>