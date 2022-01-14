/* eslint-disable react/jsx-props-no-spreading */
import '../tailwind.css';
import '../Calendar.css';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <div className="min-h-screen bg-grey-dark">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

const AppWithI18n = appWithTranslation(MyApp);

const AppWithAuth = (props) => (
  <Provider session={props.pageProps.session} >
    <AppWithI18n {...props} />
  </Provider>
)

export default AppWithAuth;
