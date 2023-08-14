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
import { Route, Routes } from 'react-router-dom';
import Welcome from './modules/welcome/container/Welcome';

dayjs.locale('es');
dayjs.extend(utc);

const App = () => {

  return (
    <ConfigProvider theme={themeCustom} locale={esES}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Welcome />} />
        </Route>
      </Routes>
    </ConfigProvider>
  )
};

export default App
