
import ReactDOM from 'react-dom/client';

import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBiding from './DataBinding/DataBiding';
//Tao root trên thẻ div#root

const root = ReactDOM.createRoot(document.getElementById('root'));

//jsx 

root.render(
<div className='abc'>
{/* <HomeLayout/> */}
<DataBiding/>
</div>
);


