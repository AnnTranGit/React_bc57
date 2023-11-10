
import ReactDOM from 'react-dom/client';

import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBiding from './DataBinding/DataBiding';
//Tao root trên thẻ div#root

//import scss o index (vi import o bat ki file nao khi build van ra index.html)
import './assets/scss/style.scss'
import StyleComponent from './StyleComponents/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import ChangeColor from './StateDemo/ChangeColor';
import ChangeAvatar from './StateDemo/ChangeAvatar';
import ChangeCarColor from './StateDemo/ChangeCarColor';
const root = ReactDOM.createRoot(document.getElementById('root'));

//jsx 

root.render(
<div>

{/* <DataBiding/>
<p className='text-red'>demo css</p>
<StyleComponent/> */}

{/* <HandleEvent/> */}

{/* <ChangeFontSize/> */}

{/* <ChangeColor/> */}

{/* <ChangeAvatar/> */}

<ChangeCarColor/>
</div>
);


