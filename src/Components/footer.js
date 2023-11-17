import { Form, Input, Select, Modal, Table, Button,Image} from "antd";
import { useNavigate } from "react-router-dom";



// import "./App.css";

import "antd/dist/antd.css";
import  { EditOutlined,CloseOutlined ,TeamOutlined } from '@ant-design/icons';

import Title from "antd/lib/skeleton/Title";


const { Search } = Input;

const { Option } = Select;
const FooterForm = (props) => {

  const onSearch = (value) => console.log(value);

  return (
  
  <div className="appfooter">
   Footer
  </div>
    
  );
};

export default  FooterForm;
