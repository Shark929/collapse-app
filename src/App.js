import React from 'react';
import { Collapse } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

function App() {
  const customExpandIcon = ({ isActive }) => {
    return isActive ? <CaretDownOutlined /> : <CaretUpOutlined />;
  };

  return (
    <Collapse expandIcon={customExpandIcon}>
      <Panel header="Panel 1" key="1">
        <p>Content of panel 1</p>
      </Panel>
      <Panel header="Panel 2" key="2">
        <p>Content of panel 2</p>
      </Panel>
      <Panel header="Panel 3" key="3">
        <p>Content of panel 3</p>
      </Panel>
    </Collapse>
  );
}

export default App;
