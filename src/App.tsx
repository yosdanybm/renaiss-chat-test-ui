// import reactLogo from './assets/react.svg'
import dayjs from 'dayjs';
import {
  ConfigProvider
} from 'antd';
import esES from 'antd/locale/es_ES';
import 'dayjs/locale/es-us';
import utc from 'dayjs/plugin/utc'
import { themeCustom } from './theme/theme';
import Layout from './layout/Layout';
import Home from './modules/home/container/Home';
import './App.css'

dayjs.locale('es');
dayjs.extend(utc);

const App = () => (
  <ConfigProvider theme={themeCustom} locale={esES}>
    <Layout>
      <Home />
    </Layout>
  </ConfigProvider>
)

export default App
